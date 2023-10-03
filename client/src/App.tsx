import { Reducer, useEffect, useReducer } from "react";
import "./App.css";
import { SocketProvider } from "./context/SocketContext";
import Chat from "./components/Chat";
import { Action, State } from "./types";
import Header from "./components/Header";
import { initialState, reducer } from "./reducer";
import Sidebar from "./components/Sidebar";

function App() {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    reducer,
    initialState
  );

  return (
    <SocketProvider>
      <div className="App">
        <Header />
        <div className="app-container">
          <Sidebar state={state} dispatch={dispatch} />
          <Chat state={state} dispatch={dispatch} />
        </div>
      <button onClick={() => console.log(state)}>Show State</button>
      </div>
    </SocketProvider>
  );
}

export default App;
