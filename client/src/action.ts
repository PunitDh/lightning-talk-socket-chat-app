import { Action, Message } from "./types";

export enum ChatAction {
  SET_MESSAGES,
  ADD_MESSAGE,
  SET_INPUT,
  SET_ACTIVE_CHAT,
  RESET_INPUT,
}

export const setMessages = (payload: Message[]): Action => ({
  type: ChatAction.SET_MESSAGES,
  payload,
});

export const addMessage = (payload: Message): Action => ({
  type: ChatAction.ADD_MESSAGE,
  payload,
});

export const setInput = (payload: string): Action => ({
  type: ChatAction.SET_INPUT,
  payload,
});

export const setActiveChat = (payload: string): Action => ({
  type: ChatAction.SET_ACTIVE_CHAT,
  payload,
});

export const resetInput = (): Action => ({
  type: ChatAction.RESET_INPUT,
});
