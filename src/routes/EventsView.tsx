import { EventType, getEvents } from "@/lib/dbFunctions";
import { useLoaderData, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import EventsList from "@/components/app-components/EventsList/EventsList";
import Loader from "@/components/app-components/Loader";

const EventsView = () => {
  const { events } = useLoaderData() as { events: EventType[] };

  return (
    <section>
      <ul className="list-none flex flex-col gap-y-4">
        <Suspense fallback={<Loader />}>
          <Await resolve={events}>
            {(loadedEvents) => <EventsList events={loadedEvents} />}
          </Await>
        </Suspense>
      </ul>
    </section>
  );
};

export default EventsView;

export function loader() {
  return defer({
    events: getEvents(),
  });
}
