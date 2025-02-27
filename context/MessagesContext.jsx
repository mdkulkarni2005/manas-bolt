import { createContext, useState } from "react";

// Create context with default value as an empty array
export const MessagesContext = createContext({
  messages: [],
  setMessages: () => {}
});

export const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  
  return (
    <MessagesContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessagesContext.Provider>
  );
};