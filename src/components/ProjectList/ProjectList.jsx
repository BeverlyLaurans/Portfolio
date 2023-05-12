import "../../styles/ProjectList.css";

function ProjectList() {
    return (
      <section className="projects">
        <div className="projects-information">
          <h2>Mes projets</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisc.</p>
        </div>
          <div className="projects-wrapper">
            <div className="project-card">
              <div className="project-card-picture">
                <img src="" alt=""></img>
                </div>
              <div className="project-card-details">
                <div className="project-details-container">
                    <h3>Mon portfolio</h3>
                    <p>Description</p>
                </div>
                <div className="tags-container">
                  <div className="tag">React</div>
                  <div className="tag">Sass</div>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-card-picture">
                <img src="" alt=""></img>
                </div>
              <div className="project-card-details">
                <div className="project-details-container">
                    <h3>Mon Vieux Grimoire</h3>
                    <p>Description</p>
                </div>
                <div className="tags-container">
                  <div className="tag">Node</div>
                  <div className="tag">Express</div>
                  <div className="tag">MongoDB</div>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-card-picture">
                <img src="" alt=""></img>
                </div>
              <div className="project-card-details">
                <div className="project-details-container">
                    <h3>Joe Blow</h3>
                    <p></p>
                </div>
                <div className="tags-container">
                  <div className="tag">Sass</div>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-card-picture">
                <img src="" alt=""></img>
                </div>
              <div className="project-card-details">
                <div className="project-details-container">
                    <h3>Shiny Agency</h3>
                    <p>Application web React.</p>
                </div>
                <div className="tags-container">
                  <div className="tag">React</div>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-card-picture">
                <img src="" alt=""></img>
                </div>
              <div className="project-card-details">
                <div className="project-details-container">
                    <h3>La maison jungle</h3>
                    <p>Application web React.</p>
                </div>
                <div className="tags-container">
                  <div className="tag">React</div>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-card-picture">
                <img src="" alt=""></img>
                </div>
              <div className="project-card-details">
                <div className="project-details-container">
                    <h3>Kasa</h3>
                    <p>Création d'une application web avec React et utilisation de Sass.</p>
                </div>
                <div className="tags-container">
                  <div className="tag">React</div>
                  <div className="tag">Sass</div>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-card-picture">
                <img src="" alt=""></img>
                </div>
              <div className="project-card-details">
                <div className="project-details-container">
                    <h3>Nina Carducci</h3>
                    <p>Optimisation des performances et du SEO technique, et corrections fonctionnelles.</p>
                </div>
                <div className="tags-container">
                  <div className="tag">HTML</div>
                  <div className="tag">CSS</div>
                  <div className="tag">JavaScript</div>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-card-picture">
                <img src="" alt=""></img>
                </div>
              <div className="project-card-details">
                <div className="project-details-container">
                    <h3>Sophie Bluel</h3>
                    <p>Affichage et gestion dynamique d'une galerie de photos avec authentification via une API.</p>
                </div>
                <div className="tags-container">
                  <div className="tag">HTML</div>
                  <div className="tag">CSS</div>
                  <div className="tag">JavaScript</div>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-card-picture">
                <img src="" alt=""></img>
                </div>
              <div className="project-card-details">
                <div className="project-details-container">
                  <h3>Booki</h3>
                  <p>Développement d'une page d'accueil responsive.</p>
                </div>
                <div className="tags-container">
                  <div className="tag">HTML</div>
                  <div className="tag">CSS</div>
                </div>
              </div>
            </div>
          </div>
      </section>
    )
  }
  
  export default ProjectList;