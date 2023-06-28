import { projectsDatas } from "../../datas/projects";
import { Link } from "react-router-dom";
// import Pagination from "./Pagination";
import "../../styles/scss/components/ProjectList.scss";

function ProjectList() {
    return (
      <section className="projects">
        <div className="projects-global-information">
          <div className="projects-title">
            <h2>Mes projets</h2>
          </div>
          <div className="projects-description">
            <p>Il s'agit des principaux projets que j'ai réalisés, pour le moment tous issus de la formation Développeur.euse web d'OpenClassrooms. N'hésitez pas à cliquez sur l'un d'entre eux pour avoir davantage d'informations.</p>
            {/* <button className="filter">Filtrer</button> */}
          </div>
        </div>
        <div className="projects-wrapper">
          {projectsDatas.map((project) => (
          <Link to={`/projets/${project.id}`} key={project.id}>
            <div className="project-card">
              <div className="project-card-picture">
                <img src={project.cover} alt={project.title}></img>
              </div>
              <div className="project-card-details">
                <div className="project-details-container">
                  <h3>{project.title}</h3>
                  <p>{project.info}</p>
                </div>
                <div className="tags-container">
                  <ul className="tags-list">
                    {project.tags.map((tag) => (
                          <li className="tag-item" key={`${tag}-${project.id}`}>{tag}</li>
                          ))}
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        ))}
        </div>
      </section>
      )
    }
  
  export default ProjectList;