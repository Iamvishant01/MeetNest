import React, { createContext, useMemo, useContext } from "react";
import { io } from "socket.io-client";

// Fetch the backend URL from environment variables
const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8000";

const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = (props) => {
  const socket = useMemo(() => io(backendURL), []);

  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};