import { useState } from "react";
import Modal from "../Modal/Modal";
import linkedinIcon from "../../assets/icons/social/linkedin-icon.png";
import githubIcon from "../../assets/icons/social/github-icon.png";
import "../../styles/scss/layouts/Footer.scss";

function Footer() {
  const [ isModalOpen, setIsModalOpen ] = useState(false);

    return (
      <footer>
        <hr></hr>
        <div className="footer-informations">
            <div className="footer-links">
                <p>©2023, All right reserved.</p>
                <ul>
                    <li><a href="#" onClick={() => setIsModalOpen(true)}>
                      Mentions légales</a></li>
                      {/* <li><a href="#">Cookies et confidentialité</a></li> */}
                </ul>
            </div>
            <div className="social-links">
              <a href="https://github.com/BeverlyLaurans"><img src={githubIcon} alt="Icône GitHub"></img></a>
              <a href="https://fr.linkedin.com/in/beverlylaurans"><img src={linkedinIcon} alt="Icône LinkedIn"></img></a>
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