import React from "react";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import CharlesCantinGallery from './components/pages/CharlesCantinGallery'


function App() {
  return (
    <div>
      <Header />
        <CharlesCantinGallery />
      <Footer />
    </div>
  );
}

export default App;
