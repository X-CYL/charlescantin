import React from "react";
import SmallCharlesCantinLogo from "../layouts/SmallCharlesCantinLogo";
import TitleBar from "../micro/TitleBar";
import CategoryExpo from "../micro/CategoryExpo";
import { cantinPictures } from "../tools/arrays";

function BebePage() {
  const maCategorieEnTableau = cantinPictures.filter(
    (item) => item.category === "Bebe"
  );
  const maCategorie = maCategorieEnTableau[0];

  return (
    <div>
      <div>
        <SmallCharlesCantinLogo />
        <TitleBar title="Bébé" />
      </div>
      <div>
        {maCategorie.pictures.map((item) => (
          <CategoryExpo
            key={item.picture}
            src={item.picture}
            alt={item.description}
            h2={item.pictitle}
          />
        ))}
      </div>
    </div>
  );
}

export default BebePage;
