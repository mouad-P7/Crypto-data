import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const AppLayout = lazy(() => import("./components/layouts/AppLayout/AppLayout"));
const Home = lazy(() => import("./components/pages/Home/Home"));
const CoinDetails = lazy(() => import("./components/pages/Home/CoinDetails/CoinDetails"));
const Exchanges = lazy(() => import("./components/pages/Exchanges/Exchanges"));
const Community = lazy(() => import("./components/pages/Community/Community"));
const Products = lazy(() => import("./components/pages/Products/Products"));
const Learn = lazy(() => import("./components/pages/Learn/Learn"));
const Watchlist = lazy(() => import("./components/pages/Watchlist/Watchlist"));
const NotFound = lazy(() => import("./components/pages/NotFound"));
const PageLoading = lazy(() => import("./components/pages/PageLoading"));


export default function App(){
  return (
    <div id='App' style={{ width: '100%', minHeight: '100vh' }}>
      <BrowserRouter>
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path="coin/:slug" element={<CoinDetails />} />
                <Route path="exchanges" element={<Exchanges />} />
                <Route path="community" element={<Community />} />
                <Route path="products" element={<Products />} />
                <Route path="learn" element={<Learn />} />
                <Route path="watchlist" element={<Watchlist />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};
