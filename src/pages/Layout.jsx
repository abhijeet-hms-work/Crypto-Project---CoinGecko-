import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar /> {/* This navbar is the shared ui we want to across paages */}
      <Outlet />
      {/* the acutal page which will be renderd along with navbar */}
    </>
  );
}

export default MainLayout;
