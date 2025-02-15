import "./styles/Navbar.css";
import logo from "../assets/Logo/logo_branca.png";
import { NavLink } from "react-router-dom"; // Importando NavLink

function Header() {
  return (
    <header className="header">
      <div className="nav-container">
        <img src={logo} alt="ProdTech Logo" className="logo" />
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/home" activeClassName="active">Home</NavLink> {/* Usando NavLink */}
            </li>
            <li>
              <NavLink to="/servicos" activeClassName="active">Serviços</NavLink> {/* Usando NavLink */}
            </li>
            <li>
              <NavLink to="/prodtech" activeClassName="active">A ProdTech</NavLink> {/* Usando NavLink */}
            </li>
            <li>
              <NavLink to="/contato" activeClassName="active">Contato</NavLink> {/* Usando NavLink */}
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-btn-container">
        <NavLink to="#" className="btn" activeClassName="active">Entrar</NavLink> {/* Usando NavLink */}
      </div>
    </header>
  );
}

export default Header;
