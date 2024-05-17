import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorView from "./routes/ErrorView.tsx";
import EventsView from "./routes/EventsView.tsx";
import NewEventView from "./routes/NewEventView.tsx";
import EventDetailsView from "./routes/EventDetailsView.tsx";
import Root from "./routes/Root.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorView />,
    children: [
      {
        path: "/events",
        element: <EventsView />,
        errorElement: <ErrorView />,
        children: [
          {
            path: ":id",
            element: <EventDetailsView />,
          },
        ],
      },
      {
        path: "/new-event",
        element: <NewEventView />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
