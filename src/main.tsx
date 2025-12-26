import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./utils/i18n.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import LandingPage from "./pages/LandingPage.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App>
          <Routes>
            <Route path={"/"} element={<LandingPage />} />
          </Routes>
        </App>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
