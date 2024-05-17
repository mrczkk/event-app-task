import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <NavigationMenu className="bg-primary text-secondary px-4 py-2 w-full rounded-lg mb-12">
      <NavigationMenuList className="gap-x-4">
        <NavigationMenuItem>
          <NavigationMenuLink>
            <Link to={"/events"}>Events</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink>
            <Link to={"/new-event"}>Add new event</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationBar;
