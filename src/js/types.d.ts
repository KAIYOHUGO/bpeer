import Peer from "peerjs";

interface Handshake {
  nodes: string[];
  connect: boolean;
}

interface IPeerNode {
  // element: HTMLVideoElement
  dail(id: string, el: HTMLVideoElement): void;
  share(stm: MediaStream, el: HTMLVideoElement): void;
  onclose(fn: VoidFunction): void;
}

interface PeerInput {
  id: string;
  l: number;
  el: HTMLVideoElement;
}

export { Handshake, IPeerNode, PeerInput };
