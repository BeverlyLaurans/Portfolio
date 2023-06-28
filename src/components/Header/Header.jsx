import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo-BL.svg"
import "../../styles/scss/layouts/Header.scss";

function Header() {
    return (
      <header>
        <div className="logo-container">
          <Link to="/" ><img src={Logo} alt="Logo Beverly Laurans"></img></Link>
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