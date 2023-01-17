import React from "react";

const TextArea = () => {
  {
    console.log(TextArea);
  }
  return (
    <div>
        <form method="post" action="#" className="formStyle2"> 
          <div className = "container-area-field">
            <div>
              Vos commentaires
            </div>
            <div> 
                <textarea type="text" id="comments"></textarea>
            </div>
          </div>
        </form>
      </div>
  );
};

export default TextArea;
