import { useState, useContext } from "react";
import { ThemeContext } from '../../context/ThemeContext';
import "../../styles/scss/components/NavBar.scss";

const NavBar = () => {
    const { theme } = useContext(ThemeContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <div className={`burger-menu-container ${theme}`}>
        <nav className={`burger-menu-wrapper ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            {/* <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}> */}
            <div className="burger-menu-bar"></div>
            <div className="burger-menu-bar"></div>
            <div className="burger-menu-bar"></div>
            {/* </div> */}
        </nav>
        {isMenuOpen && (
          <ul>
            <li><a href="/#a-propos">À propos</a></li>
            <li><a href="/#projets">Mes projets</a></li>
            <li><a href="/#competences">Mes compétences</a></li>
            <a href="/documents/CV_Beverly_Laurans_Dev_frontend_0723.pdf" target="_blank" className="cv-btn">Mon CV</a>
        </ul>
        )}
      </div>
    );
  };
  
  export default NavBar;