import Peer from "peerjs";

class Host {
    video: HTMLVideoElement;
    peer: Peer;
    stream?: MediaStream;
    clients: Peer.DataConnection[] = [];
    onopen?: () => void;
    // streams: Peer.MediaConnection[] = [];
    async shareScreen() {
        try {
            this.stream = await navigator.mediaDevices.getDisplayMedia({
                video: true,
            });
            this.video.srcObject = this.stream;
            this.stream.getTracks()[0].onended = () => {
                this.stream?.getTracks().forEach((v) => {
                    v.stop();
                });
                // this.streams.forEach((v) => {
                //     v.close();
                // });
                this.stream = undefined;
                // this.streams = [];
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
                    // this.streams.push(this.peer.call(v.peer, this.stream));
                } catch (_) {}
            });
        } catch (_) {}
    }
    constructor(id: string, video: HTMLVideoElement) {
        this.video = video;
        this.peer = new Peer(id);
        this.peer.on("connection", (conn) => {
            this.clients.push(conn);
            console.log(this.clients);
            if (this.stream) this.peer.call(conn.peer, this.stream);
            // this.streams.push(this.peer.call(conn.peer, this.stream));
        });
        this.peer.on("open", () => {
            if (this.onopen) this.onopen();
        });
    }
}

export { Host };
