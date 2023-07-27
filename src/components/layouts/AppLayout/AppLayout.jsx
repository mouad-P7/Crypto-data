import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Header from './Header';
// import '';


export default function AppLayout() {
  return (
    <>
      <Topbar />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
