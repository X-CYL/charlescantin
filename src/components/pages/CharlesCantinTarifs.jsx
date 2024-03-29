import React from "react";
import SmallCharlesCantinLogo from "../layouts/SmallCharlesCantinLogo";
import TitleBar from "../micro/TitleBar";
import DisplayGalery from "../micro/DisplayGalery";
import PriceGalery from "../micro/PriceGalery";
import { cantinPrices } from "../tools/arrays";

const CharlesCantinTarifs = () => {
  return (
    <div className="pageFormat">
      <SmallCharlesCantinLogo />
      <TitleBar title="Tarifs" />
      <div>
        {cantinPrices.map((item) => {
          let formatedPrice = item.price + " €";
          if (item.price === 0){
            formatedPrice = "Sur devis"
          }
          return (
            <>
              <PriceGalery
                src1={item.picture1}
                src2={item.picture2}
                alt1={item.alt1}
                alt2={item.alt2}
                titre={item.title}
                description={item.description}
                price ={ formatedPrice }
              />
            </>
          );
        }
        )}
      </div>
    </div>
  );
};

export default CharlesCantinTarifs;
