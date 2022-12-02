import React from "react";
import logofacebook from "../assets/pics/facebook-logo.png";
import logoinstagram from "../assets/pics/instagram-logo.png";
import DefaultButton from "./micro/DefaultButton";

export default function Header() {
  return (
    <div className="container-logo">
      <div>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img
            className="logo-size"
            src={logofacebook}
            alt="logo de facebook"
          />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img
            className="logo-size"
            src={logoinstagram}
            alt="logo de instagram"
          />
        </a>
      </div>
      <div>
        <DefaultButton label="Menu" />
      </div>
    </div>
  );
}
