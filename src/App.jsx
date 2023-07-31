import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout/AppLayout";
import Home from "./components/pages/Home/Home";
import Exchanges from './components/pages/Exchanges/Exchanges';
import Community from './components/pages/Community/Community';
import Products from "./components/pages/Products/Products";
import Learn from "./components/pages/Learn/Learn";
import Watchlist from "./components/pages/Watchlist/Watchlist";


export default function App(){
  return (
    <div id='App' style={{ width: '100%', minHeight: '100vh' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}> 
            <Route index element={<Home />}/>
            <Route path="exchanges" element={<Exchanges />}/>
            <Route path="community" element={<Community />}/>
            <Route path="products" element={<Products />}/>
            <Route path="learn" element={<Learn />}/>
            <Route path="watchlist" element={<Watchlist />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
