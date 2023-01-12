import React from "react";

const FormField = (props) => {
  return (
      <div className={props.className}>
        <form method={props.method} action={props.action} className={props.className2}> 
          <div className = "container-form-field">
            <div>
              {props.name}
            </div>
            <div> 
                <input type={props.type} id={props.id}></input>
            </div>
          </div>
        </form>
      </div>
  );
};

export default FormField;
