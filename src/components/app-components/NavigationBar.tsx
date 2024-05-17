import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">
          <Link to={"/events"}>Events</Link>
          <Link to={"/new-event"}>Add new event</Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default NavigationBar;
