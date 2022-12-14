import React from "react";
import SmallCharlesCantinLogo from "../layouts/SmallCharlesCantinLogo";
import DisplayGalery from "../micro/DisplayGalery";
import TitleBar from "../micro/TitleBar";

const CharlesCantinGallery = () => {
  let imgTest = "../../../public/pictures/Bapteme/Flamme_intense.jpg";
  return (
    <>
      <div className="pageFormat">
        <SmallCharlesCantinLogo />
        <TitleBar />
        <div className="container-flex-row">
          <div>
            <DisplayGalery
              src="../../../public/pictures/Bapteme/Flamme_intense.jpg"
              alt="famille dans un parc arborré"
              figcaption="dans le parc"
            />
          </div>
          <div>
            <DisplayGalery
              src="url= ../../../../../public/pictures/Mariage/Alliance.jpg"
              alt="canards en liberté"
              figcaption="Canards libres"
            />
          </div>
          <div>
            <DisplayGalery
              src="url= ../../../../../public/pictures/Mariage/Alliance.jpg"
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
