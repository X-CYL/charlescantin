import React from "react";
import SmallCharlesCantinLogo from "../layouts/SmallCharlesCantinLogo";
import TitleBar from "../micro/TitleBar";
import FormField from "../layouts/FormField";

const CharlesCantinContact = () => {
  return (
    <div className="pageFormat">
      <SmallCharlesCantinLogo />
      <TitleBar title="Contact" />
      <div className = "contactStyle">
        <FormField
          method="post"
          action="#"
          type="text"
          id="FirstName"
          name="Votre Nom"
          className2="formStyle"
        />
        <FormField
          method="post"
          action="#"
          type="text"
          id="LastName"
          name="Votre Prénom"
          className2="formStyle"
        />
        <FormField
          method="post"
          action="#"
          type="mail"
          id="Mail"
          name="Votre E-mail"
          className2="formStyle"
        />
        <FormField
          method="post"
          action="#"
          type="text"
          id="Comments"
          name="Vos commentaires"
          className2="formStyle"
        />
      </div>
    </div>
  );
};

export default CharlesCantinContact;
