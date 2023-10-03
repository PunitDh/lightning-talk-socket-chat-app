import { createContext } from "react";
import { User } from "../types";
import { CurrentUser } from "../constants";

export const UserContext = createContext<User>(CurrentUser);

type Props = {
  children: JSX.Element;
};

export const UserProvider = ({ children }: Props) => (
  <UserContext.Provider value={CurrentUser}>{children}</UserContext.Provider>
);
