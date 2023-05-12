import Avatar from "../../assets/avatar/photo-BL.jpg"
import "../../styles/Introduction.css";

function Introduction() {
    return (
      <section className="about">
        <section className="introduction-container">
          <h1>Hello !<br />Moi c'est Beverly, développeuse web.</h1>
          <p>Issue d'un parcours webmarketing, et ayant toujours travaillé auprès de développeurs web, j'ai finalement décidé de me lancer ! N'hésitez pas à faire un tour sur <a href="#"><b>mes projets</b></a>, mon <a href="#">profil GitHub</a>, mon <a href="#">CV</a> ou encore mon <a href="https://fr.linkedin.com/in/beverlylaurans">profil LinkedIn</a> afin d'en savoir plus !</p>
          <ul>
            <li><img src="" alt=""></img></li>
            <li><img src="" alt=""></img></li>
            <li><img src="" alt=""></img></li>
            <li><img src="" alt=""></img></li>
            <li><img src="" alt=""></img></li>
            <li><img src="" alt=""></img></li>
            <li><img src="" alt=""></img></li>
            <li><img src="" alt=""></img></li>
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