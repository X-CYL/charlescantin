import React from "react";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import CharlesCantinGallery from "./components/pages/CharlesCantinGallery";
import CharlesCantinHome from "./components/pages/CharlesCantinHome";


function App() {
  return (
    <div className= 'pageFormat'>
        <Header />
        <CharlesCantinHome />
        <Footer />
    </div>
  );
}

export default App;
