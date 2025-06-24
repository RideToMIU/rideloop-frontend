import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthLayout from "./components/layout/AuthLayout.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthLayout />
  </StrictMode>
);
