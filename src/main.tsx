import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ComplianceVerificationProvider } from "./ComplianceVerificationProvider.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ComplianceVerificationProvider>
        <App />
      </ComplianceVerificationProvider>
    </BrowserRouter>
  </StrictMode>,
);
