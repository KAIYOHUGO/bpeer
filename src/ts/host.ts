import Peer from "peerjs";

class Host {
    video: HTMLVideoElement;
    peer: Peer;
    stream?: MediaStream;
    clients: Peer.DataConnection[] = [];
    onopen?: () => void;

    close() {
        this.stream?.getTracks().forEach((v) => {
            v.stop();
        });
        this.clients.forEach((v) => {
            v.close();
        });
        this.peer.destroy();
    }

    async shareScreen() {
        try {
            this.stream = await navigator.mediaDevices.getDisplayMedia({
                video: true,
                audio: true,
            });
            this.video.srcObject = this.stream;
            this.stream.getTracks()[0].onended = () => {
                this.stream?.getTracks().forEach((v) => {
                    v.stop();
                });
                this.stream = undefined;
                this.video.srcObject = null;
                this.clients.forEach((v, i) => {
                    if (!v.open) {
                        this.clients = this.clients.splice(i, 1);
                        return;
                    }
                    v.send("close");
                });
            };
            this.clients.forEach((v, i) => {
                if (!v.open) {
                    this.clients.splice(i, 1);
                    return;
                }
                try {
                    if (this.stream) this.peer.call(v.peer, this.stream);
                } catch (_) {}
            });
        } catch (_) {}
    }
    constructor(id: string, video: HTMLVideoElement) {
        this.video = video;
        this.peer = new Peer(import.meta.env.VITE_PEER_PREFIX + id);
        this.peer.on("connection", (conn) => {
            this.clients.push(conn);
            if (this.stream) this.peer.call(conn.peer, this.stream);
        });
        this.peer.on("open", () => {
            if (this.onopen) this.onopen();
        });
    }
}

export { Host };
