import React from "react";
import SmallCharlesCantinLogo from "../layouts/SmallCharlesCantinLogo";
import TitleBar from "../micro/TitleBar";
import FormField from "../layouts/FormField";

const CharlesCantinContact = () => {
  return (
    <div className="pageFormat">
      <SmallCharlesCantinLogo />
      <TitleBar title="Contact" />
      <FormField
        method="post"
        action="#"
        type="text"
        id="FirstName"
        name="Votre Nom"
      />
      <FormField
        method="post"
        action="#"
        type="text"
        id="LastName"
        name="Votre Prénom"
      />
      <FormField
        method="post"
        action="#"
        type="mail"
        id="Mail"
        name="Votre E-mail"
      />
      <FormField
        method="post"
        action="#"
        type="text"
        id="Comments"
        name="Vos commentaires"
      />
    </div>
  );
};

export default CharlesCantinContact;
