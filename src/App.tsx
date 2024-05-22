import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorView from "./routes/ErrorView.tsx";
import EventsView from "./routes/EventsView.tsx";
import NewEventView from "./routes/NewEventView.tsx";
import EventDetailsView from "./routes/EventDetailsView.tsx";
import Root from "./routes/Root.tsx";

import { fetchEvents } from "./store/eventsSlice/events-actions.ts";
import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorView />,
    children: [
      {
        path: "events",
        element: <EventsView />,
      },
      {
        path: "events/:eventId",
        element: <EventDetailsView />,
      },
      {
        path: "/new-event",
        element: <NewEventView />,
      },
    ],
  },
]);

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
