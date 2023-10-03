import { ChatComponentProps } from "../types";
import Avatar from "./Avatar";
import useQueryParams from "../hooks/useQueryParams";
import { useEffect } from "react";
import { setActiveChat } from "../action";

const Sidebar = ({ state, dispatch }: ChatComponentProps): JSX.Element => {
  const active = useQueryParams("active");

  const handleNav = (userId: string) => () => dispatch(setActiveChat(userId));

  useEffect(() => {
    window.history.replaceState(null, "", `/?active=${state.activeChat}`);
    dispatch(setActiveChat(state.activeChat))
  }, [active, dispatch, state.activeChat]);

  return (
    <nav className="sidebar-container">
      <ul className="nav-list">
        {state.users.map((user) => (
          <li
            className={`nav-item ${active === user.id ? "active" : ""}`}
            key={user.id}
            onClick={handleNav(user.id)}
          >
            <Avatar name={user.name} /> {user.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
