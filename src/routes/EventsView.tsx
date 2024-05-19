import EventItem from "@/components/app-components/EventItem";

const EventsView = () => {
  return (
    <section>
      <ul className="list-none flex flex-col gap-y-4">
        <EventItem />
        <EventItem />
      </ul>
    </section>
  );
};

export default EventsView;
