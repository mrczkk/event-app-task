import { EventType } from "@/lib/dbFunctions";
import EventItem from "./EventItem";

const EventsList = ({ events }: { events: EventType[] }) => {
  return (
    <ul className="list-none flex flex-col gap-y-4">
      {!events ||
        (!events.length && <p className="text-center">No events found</p>)}
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventsList;
