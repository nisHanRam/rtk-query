import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ApiProvider api={myApi}> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </ApiProvider> */}
  </StrictMode>
);

// Now, we don't need ApiProvider from React as we are now using Redux and Redux has a Provider