import Link from "next/link";
import React, { useState } from "react";

const Menu: React.FC = () => {
  const [hoverHome, setHoverHome] = useState(false);
  const [hoverLivroLista, setHoverLivroLista] = useState(false);
  const [hoverLivroDados, setHoverLivroDados] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav">
        <li
          className="nav-item"
          style={{
            borderRadius: "8px",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: hoverHome ? "white" : "#212529",
          }}
          onMouseEnter={() => setHoverHome(true)}
          onMouseLeave={() => setHoverHome(false)}
        >
          <Link
            href="/"
            className={`nav-link ${hoverHome ? "text-dark" : "text-white"}`}
          >
            Home
          </Link>
        </li>
        <li
          className="nav-item"
          style={{
            borderRadius: "8px",
            marginLeft: "20px",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: hoverLivroLista ? "white" : "#212529",
          }}
          onMouseEnter={() => setHoverLivroLista(true)}
          onMouseLeave={() => setHoverLivroLista(false)}
        >
          <Link
            href="/LivroLista"
            className={`nav-link ${
              hoverLivroLista ? "text-dark" : "text-white"
            }`}
          >
            Catálogo
          </Link>
        </li>
        <li
          className="nav-item"
          style={{
            borderRadius: "8px",
            marginLeft: "20px",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: hoverLivroDados ? "white" : "#212529",
          }}
          onMouseEnter={() => setHoverLivroDados(true)}
          onMouseLeave={() => setHoverLivroDados(false)}
        >
          <Link
            href="/LivroDados"
            className={`nav-link ${
              hoverLivroDados ? "text-dark" : "text-white"
            }`}
          >
            Novo
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
