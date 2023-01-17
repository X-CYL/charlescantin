import React from "react";
import FormField from "./FormField";
import TextArea from "./TextArea";

const FormModule = () => {
  return (
    <div>
      <div className="contactStyle">
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
          <TextArea />
      </div>
    </div>
  );
};

export default FormModule;
