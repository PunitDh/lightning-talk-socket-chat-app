import { useContext } from "react";
import { Socket } from "socket.io-client";
import { SocketContext } from "../context/SocketContext";

export default function useSocket(): Socket {
  return useContext(SocketContext);
}
