import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Avatar from "../../assets/avatar/photo-BL.jpg";
import html5Icon from "../../assets/icons/tools/html5-icon.png";
import css3Icon from "../../assets/icons/tools/css3-icon.png";
import javascriptIcon from "../../assets/icons/tools/javascript-icon.png";
import reactIcon from "../../assets/icons/tools/react-icon.png";
import nodeIcon from "../../assets/icons/tools/nodejs-icon.png";
import githubIcon from "../../assets/icons/social/github-icon.png";
import whiteGithubIcon from "../../assets/icons/social/github-white-icon.svg";
import "../../styles/scss/components/Introduction.scss";

function Introduction() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`about ${theme}`} id="a-propos">
      <div className="introduction-container">
        <h1>
          Hello !<br />
          Moi c'est Beverly, développeuse web.
        </h1>
        <p>Issue d'un parcours webmarketing, et ayant toujours travaillé auprès 
        de développeurs web, j'ai finalement décidé de me lancer avec la 
        formation OpenClassrooms ! N'hésitez pas à faire un tour sur 
        <a href="/#projets"><b> mes projets</b></a>, mon 
        <a href="https://github.com/BeverlyLaurans?tab=repositories">profil GitHub</a>, mon 
        <a href="/documents/CV_Beverly_Laurans_Dev_frontend_0723.pdf" target="_blank">CV</a> ou encore mon 
        <a href="https://fr.linkedin.com/in/beverlylaurans">profil LinkedIn</a> afin d'en savoir plus !</p>
        <ul>
          <li>
            <img src={html5Icon} alt="Icône HTML5"></img>
          </li>
          <li>
            <img src={css3Icon} alt="Icône CSS3"></img>
          </li>
          <li>
            <img src={javascriptIcon} alt="Icône JavaScript"></img>
          </li>
          <li>
            <img src={reactIcon} alt="Icône React.js"></img>
          </li>
          <li>
            <img src={nodeIcon} alt="Icône Node.js"></img>
          </li>
          <li>
            <a href="https://github.com/BeverlyLaurans?tab=repositories">
              <img
                src={theme === "dark" ? whiteGithubIcon : githubIcon}
                alt="Icône GitHub"
              ></img>
            </a>
          </li>
        </ul>
      </div>
      <div className="photo-container">
        <img src={Avatar} alt="Photo de Beverly"></img>
      </div>
    </section>
  );
}

export default Introduction;