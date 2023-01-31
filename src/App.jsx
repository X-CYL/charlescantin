import React from "react";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import CharlesCantinGallery from "./components/pages/CharlesCantinGallery";
import CharlesCantinHome from "./components/pages/CharlesCantinHome";
import CharlesCantinTarifs from "./components/pages/CharlesCantinTarifs";
import CharlesCantinContact from "./components/pages/CharlesCantinContact";


function App() {
  return (
    <div className= 'pageFormat'>
        <Header />
        <CharlesCantinTarifs />
        <Footer />
    </div>
  );
}

export default App;
