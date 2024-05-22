import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EventType } from "@/lib/dbFunctions";
import { Link } from "react-router-dom";
import { dateFormat } from "@/lib/utils";

const EventItem = ({ event }: { event: EventType }) => {
  return (
    <li>
      <Link to={event.id}>
        <Card className="flex relative">
          <img src={event.image} alt={event.title} className="max-w-64" />
          <div className="content">
            <CardHeader>
              <CardTitle className="text-2xl">{event.title}</CardTitle>
              <CardDescription>{event.location}</CardDescription>
              <span className="absolute right-4 top-2 text-white text-xs bg-slate-500 flex items-center justify-center w-fit py-1 px-2 rounded-lg">
                {event.eventCategory.toUpperCase()}
              </span>
            </CardHeader>
            <CardFooter>
              <p>
                {dateFormat(event.eventDateTime, "pl-PL", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </CardFooter>
          </div>
        </Card>
      </Link>
    </li>
  );
};

export default EventItem;
