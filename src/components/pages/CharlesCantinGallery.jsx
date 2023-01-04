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
          <TitleBar
          title="Galerie"
           />
          <div className="container-flex-row">
            <div>
              <DisplayGalery
                src= "/pictures/Famille/Fratrie.jpg"
                alt="famille dans un parc arborré"
                figcaption="dans le parc"
              />
            </div>
          <div>
            <DisplayGalery
              src="/pictures/Famille/En_nage.jpg"
              alt="canards en liberté"
              figcaption="Canards libres"
            />
          </div>
          <div>
            <DisplayGalery
              src="/pictures/Famille/Cygnes_aux_lentilles.jpg"
              alt="canards sur rivière de lentilles"
              figcaption="Sur les lentilles"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CharlesCantinGallery;
