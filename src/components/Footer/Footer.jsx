import { useState, useContext } from "react";
import { ThemeContext } from '../../context/ThemeContext';
import Modal from "../Modal/Modal";
import linkedinIcon from "../../assets/icons/social/linkedin-icon.png";
import whiteLinkedinIcon from "../../assets/icons/social/linkedin-white-icon.svg";
import githubIcon from "../../assets/icons/social/github-icon.png";
import whiteGithubIcon from "../../assets/icons/social/github-white-icon.svg";
import "../../styles/scss/layouts/Footer.scss";

function Footer() {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const { theme } = useContext(ThemeContext);

    return (
      <footer>
        <hr></hr>
        <div className={`footer-links ${theme}`}>
            <div className="footer-links__informations">
                <p>©2023, All right reserved.</p>
                <ul>
                    <li><a href="#" onClick={() => setIsModalOpen(true)}>
                      Mentions légales</a></li>
                      {/* <li><a href="#">Cookies et confidentialité</a></li> */}
                </ul>
            </div>
            <div className="footer-links__social">
              <a href="https://github.com/BeverlyLaurans"><img src={theme === 'dark' ? whiteGithubIcon : githubIcon} alt="Icône GitHub"></img></a>
              <a href="https://fr.linkedin.com/in/beverlylaurans"><img src={theme === 'dark' ? whiteLinkedinIcon : linkedinIcon} alt="Icône LinkedIn"></img></a>
            </div>
        </div>
        {isModalOpen && (
          <Modal
            modalTitle="Mentions légales"
            modalDetails={<p><b>Édition :</b> Beverly Laurans.<br/><br/><b>Hébergement :</b><br/>Github Pages<br/>88 Colin P. Kelly Jr. St.<br/>San Francisco<br/>CA 94107, USA.<br/><br/>Ce site n'utilise pas de cookies et ne collecte aucune donnée à caractère personnel.</p>}
            onClose={() => setIsModalOpen(false)}
            />
        )}
      </footer>
    )
  }
  
  export default Footer;