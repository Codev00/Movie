"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { NextUIProvider } from "@nextui-org/react";
const Providers = ({ children }: { children: React.ReactNode }) => {
   return (
      <Provider store={store}>
         <NextUIProvider>{children}</NextUIProvider>
      </Provider>
   );
};

export default Providers;
