import { FaHome, FaUser, FaSignOutAlt } from "react-icons/fa";
import "../styles/navbar.css";

function NavBar({ mudarTela }) {
  return (
    <nav className="navbar">
      <h2>MINDEMY</h2>

      <div className="links">
        <button onClick={() => mudarTela("home")}>
          <FaHome /> Home
        </button>

        <button>
          Cursos
        </button>

        <button>
          <FaUser /> Perfil
        </button>

        <button onClick={() => mudarTela("login")}>
          <FaSignOutAlt /> Sair
        </button>
      </div>
    </nav>
  );
}

export default NavBar;