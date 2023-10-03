import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { User } from "../types";

export default function useCurrentUser(): User {
  return useContext(UserContext);
}
