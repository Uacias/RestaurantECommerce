import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import BasketMenu from "./components/global/BasketMenu";
import NavigationBar from "./components/global/NavigationBar";
import Home from "./pages/home/Home";

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavigationBar />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <BasketMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
