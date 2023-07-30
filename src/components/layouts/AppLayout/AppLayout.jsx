import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Header from './Header';
import MobileMenu from "./MobileMenu";
// import '';


export default function AppLayout() {
  return (
    <>
      <MobileMenu />
      <Topbar />
      <hr />
      <Header />
      <hr />
      <main>
        <Outlet />
      </main>
    </>
  );
};
