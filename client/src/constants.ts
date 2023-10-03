import { Message, User } from "./types";

export const CurrentUser: User = {
  id: "abcd",
  name: "Test",
};

export const OnlineUsers: User[] = [
  { id: "1234-asdf", name: "John" },
  { id: "2345-asdf", name: "Jane" },
];

export const ChatMessages: Message[] = [
  {
    id: 1,
    sender: CurrentUser,
    content: "Hello world",
    timestamp: new Date(),
  },
  {
    id: 2,
    sender: OnlineUsers[1],
    content: "Hello world",
    timestamp: new Date(),
  },
  {
    id: 3,
    sender: CurrentUser,
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo reprehenderit, voluptatibus placeat perferendis cupiditate dolorem nobis libero eos quaerat error et odio quam laborum repudiandae nostrum deserunt illo omnis recusandae.",
    timestamp: new Date(),
  },
  {
    id: 4,
    sender: OnlineUsers[1],
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo reprehenderit, voluptatibus placeat perferendis cupiditate dolorem nobis libero eos quaerat error et odio quam laborum repudiandae nostrum deserunt illo omnis recusandae.",
    timestamp: new Date(),
  },
];
