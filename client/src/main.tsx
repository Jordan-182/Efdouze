import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import { Homepage } from "./pages/Homepage.tsx";
import { Over } from "./pages/Over.tsx";
import { PasswordInLink } from "./pages/PasswordInLink.tsx";
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
      {
        path: "/ThePasswordIsRickRollIPromessItsNotARickRoll",
        element: <PasswordInLink />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
