import EventItem from "./EventItem";

const EventsList = ({ events }) => {
  return (
    <ul className="list-none flex flex-col gap-y-4">
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventsList;
