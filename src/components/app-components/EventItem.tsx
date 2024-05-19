import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const EventItem = () => {
  return (
    <li>
      <Link to={"1"}>
        <Card className="flex">
          <img
            src="https://via.placeholder.com/150"
            alt="Event"
            className="max-w-64"
          />
          <div className="content">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </div>
        </Card>
      </Link>
    </li>
  );
};

export default EventItem;
