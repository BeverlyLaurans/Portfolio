import Logo from "../../assets/logo/logo-BL.svg"
import "../../styles/scss/Header.scss";

function Header() {
    return (
      <header>
        <div className="logo-container">
            <a href="#"><img src={Logo} alt="Logo Beverly Laurans"></img></a>
        </div>
        <div className="nav-container">
            <nav>
                <ul>
                    <li><a href="#">À propos</a></li>
                    <li><a href="#">Mes projets</a></li>
                    <li><a href="#">Mes compétences</a></li>
                </ul>
            </nav>
            <a href="#"><button>Mon CV</button></a>
        </div>
      </header>
    )
  }
  
  export default Header;