import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorView from "./routes/ErrorView.tsx";
import EventsView from "./routes/EventsView.tsx";
import NewEventView from "./routes/NewEventView.tsx";
import EventDetailsView from "./routes/EventDetailsView.tsx";
import Root from "./routes/Root.tsx";
import { useDispatch } from "react-redux";

import { fetchEvents } from "./store/eventsSlice/events-actions";
import { useEffect } from "react";

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
