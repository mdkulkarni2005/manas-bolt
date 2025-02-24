"use client";

import React, { useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Header from "@/components/custom/Header";
import { MessageContext } from "@/context/MessagesContext";
function Provider({ children }) {
  const [message,setMessage] = useState()
  return (
    <div>
      <MessageContext.Provider value={{message,setMessage}}>
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </NextThemesProvider>
      </MessageContext.Provider>
    </div>
  );
}

export default Provider;
