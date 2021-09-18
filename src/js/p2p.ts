// import Peer from "peerjs";
// import { Handshake, IPeerNode } from "./types";

// const prefix = "mdcpp";

// var max = 5,
//     nodes: Peer.DataConnection[],
//     conn: Peer.DataConnection;

// const randomString = (l: Number) => {
//     return [...Array(l)]
//         .map(() => (~~(Math.random() * 36)).toString(36))
//         .join("");
// };

// class PeerNode implements IPeerNode {
//     private peer: Peer;
//     private limit: number;
//     private element: HTMLVideoElement;
//     onclose: VoidFunction = () => {};
//     dail(id: string) {
//         conn = this.peer.connect(id);
//         conn.on("data", (data) => {
//             console.log(data);
//         });
//     }
//     share(med: MediaStream) {
//         this.element.srcObject = med;
//         this.peer.on("open", (id) => {
//             this.peer.call(id, med);
//         });
//     }
//     constructor(
//         id: string = randomString(16),
//         l: number,
//         el: HTMLVideoElement
//     ) {
//         this.peer = new Peer(id);
//         this.limit = l;
//         this.element = el;
//         this.peer.on("call", (mc) => {
//             mc.on("stream", (med) => {
//                 this.element.srcObject = med;
//             });
//         });
//         this.peer.on("close", this.onclose);
//     }
// }
// navigator.mediaDevices.getDisplayMedia;
// export { PeerNode };
