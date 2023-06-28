import linkedinIcon from "../../assets/icons/social/linkedin-icon.png"
import githubIcon from "../../assets/icons/social/github-icon.png"
import "../../styles/scss/layouts/Footer.scss";

function Footer() {
    return (
      <footer>
        <hr></hr>
        <div className="footer-informations">
            <div className="footer-links">
                <p>©2023, All right reserved.</p>
                <ul>
                    <li><a href="#">Mentions légales</a></li>
                    <li><a href="#">Cookies et confidentialité</a></li>
                </ul>
            </div>
            <div className="social-links">
              <a href="https://github.com/BeverlyLaurans"><img src={githubIcon} alt="Icône GitHub"></img></a>
              <a href="https://fr.linkedin.com/in/beverlylaurans"><img src={linkedinIcon} alt="Icône LinkedIn"></img></a>
            </div>
        </div>
      </footer>
    )
  }
  
  export default Footer;