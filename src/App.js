import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetail from "./Layout/components/Content/ProductDetail";
import Footer from "./Layout/components/Footer/Footer";
import HeaderApp from "./Layout/components/Header/Header";
import HomePage from "./pages/Home";
import IpadPage from "./pages/Ipad";
import IphonePage from "./pages/Iphone";
import MacPage from "./pages/Mac";
import AccessoryPage from "./pages/PhuKien";
import SoundPage from "./pages/Sound";
import WatchPage from "./pages/Watch";

function App() {
  return (
    <div className="App">
      <HeaderApp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/iphone" element={<IphonePage />} />
        <Route path="/mac" element={<MacPage />} />
        <Route path="/ipad" element={<IpadPage />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/sound" element={<SoundPage />} />
        <Route path="/accessory" element={<AccessoryPage />} />
        <Route path="/products/:productId" element={<ProductDetail />} />

        {/* <Route path="/tekzone" element={<TekzonePage />} />
        <Route path="/topcare" element={<TopcarePage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
