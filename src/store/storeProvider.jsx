"use client";

import { Provider } from "react-redux";
import { store as defaultStore } from "./store";

export default function StoreProvider({ children, store = defaultStore }) {
  return <Provider store={store}>{children}</Provider>;
}

