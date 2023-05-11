import linkedinIcon from "../../assets/icons/linkedin-icon.svg"
import "../../styles/Footer.css";

function Footer() {
    return (
      <footer>
        <hr></hr>
        <div className="footer-informations">
            <div className="footer-links">
                <p>©2022, All right reserved.</p>
                <ul>
                    <li><a href="#">Mentions légales</a></li>
                    <li><a href="#">Cookies et confidentialité</a></li>
                </ul>
            </div>
            <div className="social-links">
                <a href="#"><img src={linkedinIcon}></img></a>
            </div>
        </div>
      </footer>
    )
  }
  
  export default Footer;