import Peer from "peerjs";

class Room {
    video: HTMLVideoElement;
    peer: Peer;
    stream?: MediaStream;
    connect?: Peer.DataConnection;
    onclose?: () => void;
    onopen?: () => void;

    close() {
        this.stream?.getTracks().forEach((v) => {
            v.stop();
        });
        this.peer.destroy();
    }

    dail(id: string) {
        this.connect = this.peer.connect(import.meta.env.VITE_PEER_PREFIX + id);
        this.connect.on("data", (data: string) => {
            switch (data) {
                case "close":
                    this.stream?.getTracks().forEach((v) => {
                        v.stop();
                    });
                    this.video.srcObject = null;
                    break;
                default:
                    break;
            }
            console.log(data);
        });
        this.connect.on("close", () => {
            this.stream?.getTracks().forEach((v) => {
                v.stop();
            });
            this.video.srcObject = null;
            if (this.onclose) this.onclose();
        });
    }
    async fullscreen() {
        await this.video.parentElement?.requestFullscreen();
    }
    constructor(video: HTMLVideoElement) {
        this.video = video;
        this.peer = new Peer();
        this.peer.on("call", (mdc) => {
            mdc.answer();
            mdc.on("stream", (stm) => {
                this.stream = stm;
                this.video.srcObject = this.stream;
                this.stream.getTracks()[0].onended = () => {
                    this.stream?.getTracks().forEach((v) => {
                        v.stop();
                    });
                    this.video.srcObject = null;
                };
            });
        });
        this.peer.on("open", () => {
            if (this.onopen) this.onopen();
        });
    }
}

export { Room };
