import { EventType } from "@/lib/dbFunctions";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { dateFormat } from "@/lib/utils";
import Loader from "@/components/app-components/Loader";
import { useAppSelector } from "@/store/hooks";

const EventComponent = ({ event }: { event: EventType }) => {
  return (
    <Card>
      <img
        src={event.image}
        alt={event.title}
        className="w-full max-h-80 object-cover"
      />
      <div className="content">
        <CardHeader>
          <CardTitle className="text-2xl relative">
            {event.title}
            <span className="absolute right-0 top-0 bottom-0 text-white text-xs bg-slate-500 flex items-center justify-center w-fit py-1 px-2 rounded-lg">
              {event.eventCategory.toUpperCase()}
            </span>
          </CardTitle>
          <CardDescription>
            Location: {event.location}, time:{" "}
            {dateFormat(event.eventDateTime, "pl-PL", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{event.description}</p>
        </CardContent>
        <CardFooter className="flex-col items-start gap-y-2">
          <span className="text-sm font-bold block">Contact info:</span>
          <p className="text-slate-500 text-xs">
            Contact number: <span className="font-bold">{event.phone}</span>
          </p>
          <p className="text-slate-500 text-xs">
            Contact email: <span className="font-bold">{event.email}</span>
          </p>
        </CardFooter>
      </div>
    </Card>
  );
};

const EventDetailsView = () => {
  const { eventId } = useParams();
  const event = useAppSelector((state) =>
    state.events.events.find((e) => e.id === eventId)
  );

  return (
    <section>{event ? <EventComponent event={event} /> : <Loader />}</section>
  );
};

export default EventDetailsView;
