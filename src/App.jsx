import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout/AppLayout";
import Home from "./components/pages/Home";
import Exchanges from './components/pages/Exchanges';
import Community from './components/pages/Community';
import Products from "./components/pages/Products";
import Learn from "./components/pages/Learn";
import Watchlist from "./components/pages/Watchlist";
import './styles/App.css';


export default function App(){
  return (
    <div id='App'>
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
