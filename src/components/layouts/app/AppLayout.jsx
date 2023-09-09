import Topbar from "./Topbar";
import Header from './Header';
import MobileMenu from "./MobileMenu";


export default function AppLayout() {
  return (
    <>
      <MobileMenu />
      <Topbar />
      <hr />
      <Header />
      <hr />
    </>
  );
};
