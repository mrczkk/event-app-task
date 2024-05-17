import { Outlet } from "react-router-dom";
import NavigationBar from "@/components/app-components/NavigationBar";
const Root = () => {
  return (
    <>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
