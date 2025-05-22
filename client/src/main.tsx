import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import { CountProvider } from "./context/CountContext.tsx";
import { Homepage } from "./pages/Homepage.tsx";
import { Over } from "./pages/Over.tsx";
import { PasswordInLink } from "./pages/PasswordInLink.tsx";
import { Leon } from "./pages/Leon.tsx";
import { Navigation } from "./pages/Navigation.tsx";
import { PasswordForNavigation } from "./pages/PasswordForNavigation.tsx";
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
      {
        path: "/Leon",
        element: <Leon />,
      },
      {
        path: "/ReplaceThis",
        element: <Navigation />,
      },
      {
        path: "/Password",
        element: <PasswordForNavigation />,
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
