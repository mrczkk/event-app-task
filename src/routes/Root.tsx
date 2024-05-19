import { Outlet } from "react-router-dom";
import NavigationBar from "@/components/app-components/NavigationBar";
const Root = () => {
  return (
    <div className="p-8">
      <NavigationBar />
      <main className="py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
