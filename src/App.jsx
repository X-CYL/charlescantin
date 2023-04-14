import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import CharlesCantinGallery from "./components/pages/CharlesCantinGallery";
import CharlesCantinHome from "./components/pages/CharlesCantinHome";
import CharlesCantinTarifs from "./components/pages/CharlesCantinTarifs";
import CharlesCantinContact from "./components/pages/CharlesCantinContact";
import MariagePage from "./components/pages/MariagePage";
import CouplePage from "./components/pages/CouplePage";
import FamillePage from "./components/pages/FamillePage";
import GrossessePage from "./components/pages/GrossessePage";
import BaptemePage from "./components/pages/BaptemePage";
import BebePage from "./components/pages/BebePage";
import Error from "./components/tools/functions/ErrorPage";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <div className="pageFormat">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<CharlesCantinHome />} />
            <Route path="/home" element={<CharlesCantinHome />} />
            <Route path="/galery" element={<CharlesCantinGallery />} />
            <Route path="/tarifs" element={<CharlesCantinTarifs />} />
            <Route path="/contact" element={<CharlesCantinContact />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
