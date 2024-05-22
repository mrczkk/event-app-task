import { Suspense } from "react";
import EventsList from "@/components/app-components/EventsList/EventsList";
import Loader from "@/components/app-components/Loader";
import { useSelector } from "react-redux";

const EventsView = () => {
  const events = useSelector((state) => state.events.events);

  return (
    <section>
      <ul className="list-none flex flex-col gap-y-4">
        <Suspense fallback={<Loader />}>
          <EventsList events={events} />
        </Suspense>
      </ul>
    </section>
  );
};

export default EventsView;
