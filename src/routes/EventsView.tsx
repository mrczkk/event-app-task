import EventsList from "@/components/app-components/EventsList/EventsList";
import Loader from "@/components/app-components/Loader";
import { useSelector } from "react-redux";

const EventsView = () => {
  const events = useSelector((state) => state.events.events);

  return (
    <section>
      <ul className="list-none flex flex-col gap-y-4">
        {events && events.length > 0 ? (
          <EventsList events={events} />
        ) : (
          <Loader />
        )}
      </ul>
    </section>
  );
};

export default EventsView;
