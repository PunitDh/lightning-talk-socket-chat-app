import { ChatComponentProps } from "../types";
import useCurrentUser from "../hooks/useCurrentUser";
import Send from "../assets/Send";
import { addMessage, resetInput, setInput } from "../action";
import useSocket from "../hooks/useSocket";

const Form = ({ state, dispatch }: ChatComponentProps) => {
  const currentUser = useCurrentUser();
  const activeChatMessages = state.chats[state.activeChat];
  const socket = useSocket();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(setInput(e.target.value));
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const content = state.input.trim();
    const message = {
      id: activeChatMessages.length + 1,
      sender: currentUser,
      content,
      timestamp: new Date(),
    };
    if (content.length) dispatch(addMessage(message));
    dispatch(resetInput());
    socket.emit("send-message", message);
  };

  return (
    <form className="form-container" onSubmit={sendMessage}>
      <input
        type="text"
        className="message-input"
        name="message"
        autoComplete="off"
        autoFocus
        value={state.input}
        onChange={handleChange}
        placeholder="Enter a message"
      />
      <button
        type="submit"
        title="Send message"
        className="message-submit-button"
        disabled={state.input.length < 1}
      >
        <Send fill="white" />
      </button>
    </form>
  );
};

export default Form;
