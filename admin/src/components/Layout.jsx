import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
export const Layout = () => {
  return (
    <>
      <div className="d-flex flex-nowrap" style={{ minHeight: "100vh" }}>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};
