import { useEffect, useRef, useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import { ChatMessages } from "./constants";

export type Message = {
  content: string;
  sender: string;
};

function App() {
  const [currentUserId, setCurrentUserId] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>(ChatMessages);
  const scrollRef = useRef<HTMLLIElement>(null);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const content = form.message.value.trim();
    if (!content.length) return;

    const message: Message = {
      content,
      sender: currentUserId,
    };

    setMessages((messages) => [...messages, message]);
    form.reset();
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, [messages.length]);

  return (
    <div className="App">
      <div className="app-container">
        <main className="chat-container">
          <ul className="messages-container">
            {messages.map((message) => (
              <li
                key={message.content}
                className={`message-container ${
                  message.sender === currentUserId
                    ? "message-right"
                    : "message-left"
                }`}
              >
                <Avatar name={"A"} />
                <div className="message-content-container">
                  <span className="message-content">{message.content}</span>
                </div>
              </li>
            ))}
            <li ref={scrollRef} />
          </ul>

          <form className="form-container" onSubmit={sendMessage}>
            <input
              type="text"
              className="message-input"
              name="message"
              autoComplete="off"
              autoFocus
              placeholder="Enter a message"
            />
            <button
              type="submit"
              title="Send message"
              className="message-submit-button"
            >
              Send
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default App;
