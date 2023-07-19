import { useState, useContext, useEffect, useRef } from "react";
import { ThemeContext } from '../../context/ThemeContext';
import "../../styles/scss/components/NavBar.scss";

const NavBar = ({ isMenuOpen, onMenuToggle }) => {
    const { theme } = useContext(ThemeContext);
    const [onMouseLogo, setOnMouseLogo] = useState(false);

    const menuContainerRef = useRef(null);
    const menuWrapperRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const clickedElement = event.target;

            if (
                menuContainerRef.current &&
                menuWrapperRef.current &&
                !clickedElement.classList.contains("menu-icon") &&
                !clickedElement.classList.contains("cv-btn") &&
                !clickedElement.closest(".burger-menu-navigation")
            ) {
                onMenuToggle();
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [onMenuToggle]);

    const closeMenu = () => {
        onMenuToggle();
    };

    return (
      <div>
      <div className={`burger-menu-container ${theme}`}>
        <nav 
        className={`burger-menu-wrapper ${isMenuOpen ? 'open' : ''} ${onMouseLogo ? 'hover' : ''}`} 
        onClick={closeMenu}
        ref={menuWrapperRef}
        onMouseEnter={() => setOnMouseLogo(true)}
        onMouseLeave={() => setOnMouseLogo(false)}
        >
            <div className="burger-menu-bar"></div>
            <div className="burger-menu-bar"></div>
            <div className="burger-menu-bar"></div>
        </nav>
      </div>
      {isMenuOpen && (
          <ul className={`burger-menu-navigation ${isMenuOpen ? "open" : ""} ${theme}`}>
            <li><a href="/#a-propos" onClick={closeMenu}>À propos</a></li>
            <li><a href="/#projets" onClick={closeMenu}>Mes projets</a></li>
            <li><a href="/#competences" onClick={closeMenu}>Mes compétences</a></li>
            <a href="/documents/CV_Beverly_Laurans_Dev_frontend_0723.pdf" target="_blank" className="cv-btn">Mon CV</a>
        </ul>
        )}
      </div>
    );
  };
  
  export default NavBar;