import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Message } from "./types";
import Avatar from "./components/Avatar";
import Send from "./assets/Send";
import { Socket, io } from "socket.io-client";

function App() {
  const [currentUser, setCurrentUser] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    const socket = io("http://localhost:5000", {
      transports: ["websocket", "polling", "flashsocket"],
    });
    setSocket(socket);
    socket.on("message-received", (message) => {
      setMessages((messages) => [...messages, message]);
    });
    socket.on("connected", (socketId) => {
      setCurrentUser(socketId);
    });

    return () => {
      socket.off("message-received");
      socket.off("connected");
    };
  }, []);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(currentUser);
    const content = input.trim();
    const message = {
      id: messages.length + 1,
      sender: currentUser,
      content,
      timestamp: new Date(),
    };
    socket?.emit("send-message", message);
    // if (content.length) setMessages((messages) => [...messages, message]);
    setInput("");
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, [messages.length]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <div className="app-container">
        <main className="chat-container">
          <section className="messages-container">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message-container ${
                  message.sender === currentUser
                    ? "message-right"
                    : "message-left"
                }`}
              >
                <Avatar name={"U"} />
                <div className="message-content-container">
                  <div className="message-content">{message.content}</div>
                  <span className="message-timestamp">
                    {message.timestamp.toLocaleString("en-au")}
                  </span>
                </div>
              </div>
            ))}
            <div ref={scrollRef} />
          </section>
          <form className="form-container" onSubmit={sendMessage}>
            <input
              type="text"
              className="message-input"
              name="message"
              autoComplete="off"
              autoFocus
              value={input}
              onChange={handleChange}
              placeholder="Enter a message"
            />
            <button
              type="submit"
              title="Send message"
              className="message-submit-button"
              disabled={input.length < 1}
            >
              <Send fill="white" />
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default App;
