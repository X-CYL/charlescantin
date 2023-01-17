import React from "react";
import SmallCharlesCantinLogo from "../layouts/SmallCharlesCantinLogo";
import TitleBar from "../micro/TitleBar";
import FormModule from "../layouts/FormModule";
import PresentationModule from "../layouts/PresentationModule";

const CharlesCantinContact = () => {
  return (
    <div className="pageFormat">
      <SmallCharlesCantinLogo />
      <TitleBar title="Contact" />
      <div className ="container-formField">
        <div>
          <FormModule />
        </div>
        <div>
          <PresentationModule />
        </div>
      </div>
    </div>
  );
};

export default CharlesCantinContact;
