import Avatar from "../../assets/avatar/photo-BL.jpg"
import html5Icon from "../../assets/icons/tools/html5-icon.png"
import css3Icon from "../../assets/icons/tools/css3-icon.png"
import javascriptIcon from "../../assets/icons/tools/javascript-icon.png"
import reactIcon from "../../assets/icons/tools/react-icon.png"
import nodeIcon from "../../assets/icons/tools/nodejs-icon.png"
import sassIcon from "../../assets/icons/tools/sass-icon.png"
import mongoDBIcon from "../../assets/icons/tools/mongoDB-icon.png"
import githubIcon from "../../assets/icons/social/github-icon.png"
import "../../styles/scss/components/Introduction.scss";

function Introduction() {
    return (
      <section className="about">
        <section className="introduction-container">
          <h1>Hello !<br />Moi c'est Beverly, développeuse web.</h1>
          {/* <div> */}
            <p>Issue d'un parcours webmarketing, et ayant toujours travaillé auprès de développeurs web, j'ai finalement décidé de me lancer ! N'hésitez pas à faire un tour sur <a href="#"><b>mes projets</b></a>, mon <a href="https://github.com/BeverlyLaurans?tab=repositories">profil GitHub</a>, mon <a href="#">CV</a> ou encore mon <a href="https://fr.linkedin.com/in/beverlylaurans">profil LinkedIn</a> afin d'en savoir plus !</p>
            {/* <p id="read-more"> En savoir plus</p> */}
          {/* </div> */}
          <ul>
            <li><img src={html5Icon} alt="Icône HTML5"></img></li>
            <li><img src={css3Icon} alt="Icône CSS3"></img></li>
            <li><img src={javascriptIcon} alt="Icône JavaScript"></img></li>
            <li><img src={reactIcon} alt="Icône React.js"></img></li>
            <li><img src={nodeIcon} alt="Icône Node.js"></img></li>
            {/* <li><img src={sassIcon} alt="Icône Sass"></img></li> */}
            {/* <li><img src={mongoDBIcon} alt="Icône MongoDB"></img></li> */}
            <li><a href="https://github.com/BeverlyLaurans?tab=repositories"><img src={githubIcon} alt="Icône GitHub"></img></a></li>
          </ul>
        </section>
        <section className="photo-container">
          <div>
            <div>
              <img src={Avatar} alt=""></img>
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </section>
      </section>
    )
  }
  
  export default Introduction;