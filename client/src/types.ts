import { Dispatch } from "react";
import { ChatAction } from "./action";

export type Message = {
  id: number;
  sender: User;
  content: string;
  timestamp: Date;
};

export type User = {
  id: string;
  name: string;
};

export type State = {
  chats: { [key:string]: Message[] }
  messages: Message[];
  input: string;
  users: User[];
  activeChat: string;
};

export type Action = {
  type: ChatAction;
  payload?: any;
};

export type ChatComponentProps = {
  state: State;
  dispatch: Dispatch<Action>;
};
