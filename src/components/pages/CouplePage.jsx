import React from "react";
import SmallCharlesCantinLogo from "../layouts/SmallCharlesCantinLogo";
import TitleBar from "../micro/TitleBar";
import CategoryExpo from "../micro/CategoryExpo";
import { cantinPictures } from "../tools/arrays";

function CouplePage() {
  const maCategorieEnTableau = cantinPictures.filter(
    (item) => item.category === "Couples"
  );
  const maCategorie = maCategorieEnTableau[0];

  return (
    <div>
      <div>
        <SmallCharlesCantinLogo />
        <TitleBar title="couples" />
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

export default CouplePage;
