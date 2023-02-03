import React from "react";
import SmallCharlesCantinLogo from "../layouts/SmallCharlesCantinLogo";
import DisplayGalery from "../micro/DisplayGalery";
import TitleBar from "../micro/TitleBar";
import { cantinPictures } from "../tools/arrays";

const CharlesCantinGallery = () => {
  return (
    <>
      <div className="pageFormat">
        <SmallCharlesCantinLogo />
        <TitleBar title="Galerie" />
        <div className="container-flex-row">
          {cantinPictures.map((item) => {
            let formatedGallery = item.category
            return (
              <div>
                <DisplayGalery
                  categorie={item.category}
                  src={item.pictures[0].picture}
                  alt={item.pictures[0].description}
                  figcaption={item.pictures[0].pictitle}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CharlesCantinGallery;
