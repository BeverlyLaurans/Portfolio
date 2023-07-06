import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/logo/logo-BL.svg";
import lightBlueLogo from "../../assets/logo/logo-BL-lightblue.svg";
import "../../styles/scss/layouts/Header.scss";

function Header() {
  const [onMouseLogo, setOnMouseLogo] = useState(false);

    return (
      <header>
        <div className={`logo-container ${onMouseLogo ? "active" : ""}`}>
          <Link to="/" >
            <img
            src={onMouseLogo ? lightBlueLogo : Logo}
            alt="Logo Beverly Laurans"
            onMouseEnter={() => setOnMouseLogo(true)}
            onMouseLeave={() => setOnMouseLogo(false)}
            />
          </Link>
        </div>
        <div className="nav-container">
            <nav>
                <ul>
                  <li><a href="/#a-propos">À propos</a></li>
                  <li><a href="/#projets">Mes projets</a></li>
                  <li><a href="/#competences">Mes compétences</a></li>
                </ul>
            </nav>
            <a href="/documents/CV_Beverly_Laurans_Dev_frontend_0723.pdf" target="_blank"><button>Mon CV</button></a>
        </div>
      </header>
    )
  }

  export default Header;