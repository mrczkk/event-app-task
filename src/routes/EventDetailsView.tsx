import { getEvent } from "@/lib/dbFunctions";
import { useLoaderData, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const EventComponent = ({ event }) => {
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
            Location: {event.location}, time: {event.eventDateTime}
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
  const { event } = useLoaderData();

  return (
    <Suspense fallback={<p className="text-center">Loading...</p>}>
      <Await resolve={event}>
        {(loadedEvent) => <EventComponent event={loadedEvent} />}
      </Await>
    </Suspense>
  );
};

export default EventDetailsView;

export function loader({ params }) {
  return defer({
    event: getEvent(params.eventId),
  });
}
