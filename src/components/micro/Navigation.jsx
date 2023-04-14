import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/home">Acceuil</Link>
          <Link to="/galery">Galerie</Link>
          <Link to="/tarifs">Tarifs</Link>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
