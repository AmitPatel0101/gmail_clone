import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MessageContextProvider from "./Context/messageContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MessageContextProvider>
      <App />
    </MessageContextProvider>
  </StrictMode>
);
