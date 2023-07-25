import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Logo from "../../assets/logo/logo-BL.svg";
import lightBlueLogo from "../../assets/logo/logo-BL-lightblue.svg";
import whiteLogo from "../../assets/logo/logo-BL-white.svg";
import lightPinkLogo from "../../assets/logo/logo-BL-lightpink.svg";
import NavBar from "../NavBar/NavBar";
import "../../styles/scss/layouts/Header.scss";

function Header() {
  const [onMouseLogo, setOnMouseLogo] = useState(false);
  const { theme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className={`logo-container ${onMouseLogo ? "active" : ""} ${theme}`}>
        <Link to="/">
          {isMenuOpen ? (
            <img
              src={theme === "dark" ? whiteLogo : whiteLogo}
              alt="Logo Beverly Laurans"
              style={{ cursor: "default" }}
            />
          ) : (
            <img
              src={
                onMouseLogo
                  ? theme === "dark"
                    ? lightPinkLogo
                    : lightBlueLogo
                  : theme === "dark"
                  ? whiteLogo
                  : Logo
              }
              alt="Logo Beverly Laurans"
              onMouseEnter={() => setOnMouseLogo(true)}
              onMouseLeave={() => setOnMouseLogo(false)}
            />
          )}
        </Link>
      </div>
      <div className="nav-container">
        <nav>
          <ul>
            <li>
              <a href="/#a-propos">À propos</a>
            </li>
            <li>
              <a href="/#projets">Mes projets</a>
            </li>
            <li>
              <a href="/#competences">Mes compétences</a>
            </li>
          </ul>
        </nav>
        <a
          href="/documents/CV_Beverly_Laurans_Dev_frontend_0723.pdf"
          target="_blank"
          className="cv-btn"
        >
          Mon CV
        </a>
      </div>
      <NavBar isMenuOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />
    </header>
  );
}

export default Header;
