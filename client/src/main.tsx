import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import { CountProvider } from "./context/CountContext.tsx";
import { Homepage } from "./pages/Homepage.tsx";
import { Over } from "./pages/Over.tsx";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/Over",
        element: <Over />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CountProvider>
      <RouterProvider router={router} />
    </CountProvider>
  </StrictMode>
);
