import { ChatAction } from "./action";
import { ChatMessages, OnlineUsers } from "./constants";
import { Action, State } from "./types";

export const initialState: State = {
  chats: {
    [OnlineUsers[0].id]: [...ChatMessages].sort(() => Math.random() - 0.5),
    [OnlineUsers[1].id]: [...ChatMessages].sort(() => Math.random() - 0.5),
  },
  messages: [],
  input: "",
  users: OnlineUsers,
  activeChat: OnlineUsers[0].id,
};

export function reducer(state: State, action: Action): State {
  const activeChatMessages = state.chats[state.activeChat];

  switch (action.type) {
    case ChatAction.ADD_MESSAGE: {
      return {
        ...state,
        chats: {
          ...state.chats,
          [state.activeChat]: [...activeChatMessages, action.payload],
        },
      };
    }
    case ChatAction.SET_MESSAGES: {
      return {
        ...state,
        chats: {
          ...state.chats,
          [state.activeChat]: action.payload,
        },
      };
    }
    case ChatAction.SET_INPUT: {
      return {
        ...state,
        input: action.payload,
      };
    }
    case ChatAction.SET_ACTIVE_CHAT: {
      return {
        ...state,
        activeChat: action.payload,
      };
    }
    case ChatAction.RESET_INPUT: {
      return {
        ...state,
        input: initialState.input,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
