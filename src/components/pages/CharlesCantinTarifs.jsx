import React from "react";
import SmallCharlesCantinLogo from "../layouts/SmallCharlesCantinLogo";
import TitleBar from "../micro/TitleBar";
import DisplayGalery from "../micro/DisplayGalery";
import PriceGalery from "../micro/PriceGalery";
import cantinPrices from "../tools/arrays";

const CharlesCantinTarifs = () => {
  return (
    <div className="pageFormat">
      <SmallCharlesCantinLogo />
      <TitleBar title="Tarifs" />
      <div className="mainContainertarifs">
        <div className="containertarifs">
          <PriceGalery
            src={cantinPrices.Picture1Price}
            alt="famille dans un parc arborré"
            className="priceGaleryTarif"
          />
          <PriceGalery
            src="/pictures/Couple/sunshine-couple-small.jpg"
            alt="famille dans un parc arborré"
            className="priceGaleryTarif"
          />
          <div className="container-col">
            <span>NOUS DEUX</span>
            <span>Scéance photo pour couple en exterieur ou en studio</span>
          </div>
          <p>130€</p>
        </div>
      </div>
    </div>
  );
};

export default CharlesCantinTarifs;
