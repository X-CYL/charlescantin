import React from "react";
import SmallCharlesCantinLogo from "../layouts/SmallCharlesCantinLogo";
import TitleBar from "../micro/TitleBar";
import CategoryExpo from "../micro/CategoryExpo";
import { cantinPictures } from "../tools/arrays";


function MariagePage() {
  const maCategorieEnTableau = cantinPictures.filter(
    (item) => item.category === "Mariage"
  );
  const maCategorie = maCategorieEnTableau[0];

  return (
    <div>
      <div>
        <SmallCharlesCantinLogo />
        <TitleBar title="Mariage" />
      </div>
      <div>
        {maCategorie.pictures.map((item) => (
          <CategoryExpo key={item.picture} src={item.picture} alt={item.description} h2={item.pictitle} />
        ))}
      </div>
    </div>
  );
}

export default MariagePage;
