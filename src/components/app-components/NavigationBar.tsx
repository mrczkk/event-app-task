import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <NavigationMenu className="bg-primary text-secondary px-4 py-2 w-full rounded-lg mb-12">
      <NavigationMenuList className="gap-x-4">
        <NavigationMenuItem>
          <Link to={"/events"}>Events</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to={"/new-event"}>Add new event</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationBar;
