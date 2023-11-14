import { Outlet } from "react-router";
import { Navbar } from "./navbar.jsx";
import { Footer } from "./Footer.jsx";

export default function Layout() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Outlet />
      <Footer />
    </>
  );
}
