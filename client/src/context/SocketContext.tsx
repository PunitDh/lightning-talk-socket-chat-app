import { createContext } from "react";
import { Socket, io } from "socket.io-client";

const socket = io(process.env.REACT_APP_API_URL!, {
  transports: ["websocket", "polling", "flashsocket"],
});

export const SocketContext = createContext<Socket>(socket);

type Props = {
  children: JSX.Element;
};

export const SocketProvider = ({ children }: Props) => (
  <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
);
