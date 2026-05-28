import { useState } from "react";
import logo from "../assets/logo.svg";
import {
  FaBars,
  FaTimes
} from "react-icons/fa";

import "../styles/navbar.css";

function NavBar({ mudarTela }) {

  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <nav className="navbar">

      <img src={logo} alt="Logo Mindemy" className="logo" />

      <div
        className="menu-icon"
        onClick={() => setMenuAberto(!menuAberto)}
      >
        {menuAberto ? <FaTimes /> : <FaBars />}
      </div>

      <div className={menuAberto ? "links active" : "links"}>

        <button onClick={() => mudarTela("login")}>
          Entrar
        </button>

        <button onClick={() => mudarTela("cadastro")}>
          Cadastro
        </button>

      </div>

    </nav>
  );
}

export default NavBar;