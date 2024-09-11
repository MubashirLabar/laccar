import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "styles/global.css";

// pages
import Home from "pages/home";
import Properties from "pages/properties";
import Customers from "pages/customers";
import Settings from "pages/settings";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/customers" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
