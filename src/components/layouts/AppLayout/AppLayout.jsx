import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Header from './Header';
// import '';


export default function AppLayout() {
  return (
    <>
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
