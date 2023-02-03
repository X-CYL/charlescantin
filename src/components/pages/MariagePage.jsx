import React from "react";
import SmallCharlesCantinLogo from "../layouts/SmallCharlesCantinLogo";
import TitleBar from "../micro/TitleBar";
import Mariage from "../micro/Mariage";
import { cantinPictures } from "../tools/arrays";


function MariagePage() {
  const maCategorieMariageEnTableau = cantinPictures.filter(
    (item) => item.category === "Mariage"
  );
  const maCategorieMariage = maCategorieMariageEnTableau[0];

  return (
    <div>
      <div>
        <SmallCharlesCantinLogo />
        <TitleBar title="Mariage" />
      </div>
      <div className="container-mariage-page">
        {maCategorieMariage.pictures.map((item) => (
          <Mariage key={item.picture} src={item.picture} alt={item.description} h2={item.pictitle} />
        ))}
      </div>
    </div>
  );
}

export default MariagePage;
