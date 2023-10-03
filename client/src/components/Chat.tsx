import { useEffect, useRef } from "react";
import useCurrentUser from "../hooks/useCurrentUser";
import { ChatComponentProps, Message } from "../types";
import Form from "./Form";
import Avatar from "./Avatar";
import useSocket from "../hooks/useSocket";
import { addMessage } from "../action";

const Chat = ({ state, dispatch }: ChatComponentProps) => {
  const currentUser = useCurrentUser();
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeChatMessages = state.chats[state.activeChat];
  const socket = useSocket();

  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, [activeChatMessages.length]);

  useEffect(() => {
    const receiveMessage = (message: Message) => dispatch(addMessage(message));
    socket.on("message-received", receiveMessage);

    return () => {
      socket.off("message-received", receiveMessage);
    };
  }, [dispatch, socket]);

  return (
    <main className="chat-container">
      <section className="messages-container">
        {activeChatMessages.map((message) => (
          <div
            key={message.id}
            className={`message-container ${
              message.sender.id === currentUser.id
                ? "message-right"
                : "message-left"
            }`}
          >
            <Avatar name={currentUser.name} />
            <div className="message-content-container">
              <div className="message-content">{message.content}</div>
              <span className="message-timestamp">
                {message.timestamp.toLocaleString("en-au")}
              </span>
            </div>
          </div>
        ))}
        <div ref={scrollRef}></div>
      </section>
      <Form state={state} dispatch={dispatch} />
    </main>
  );
};

export default Chat;
