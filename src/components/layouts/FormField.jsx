import React from "react";

const FormField = (props) => {
  return (
    <div className={props.className}>
      <form method={props.method} action={props.action}>
        {props.name}
        <input type={props.type} id={props.id}></input>
      </form>
    </div>
  );
};

export default FormField;
