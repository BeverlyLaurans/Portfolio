import { projectsDatas } from "../../datas/projects";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../styles/scss/components/ProjectList.scss";

function ProjectList() {

  const [selectedTag, setSelectedTag] = useState("Tous");
  const [filteredProjects, setFilteredProjects] = useState(projectsDatas);
  const allTags = new Set(['Tous', ...projectsDatas.flatMap((project) => project.tags)]);

  useEffect(() => {
    if (selectedTag === 'Tous') {
      setFilteredProjects(projectsDatas);
    } else {
      setFilteredProjects(
        projectsDatas.filter((project) => project.tags.includes(selectedTag))
      );
    }
  }, [selectedTag]);

    return (
      <section className="projects" id="projets">
        <div className="projects-global-information">
          <div className="projects-introduction">
            <div className="projects-title">
              <h2>Mes projets</h2>
            </div>
          </div>
          <div className="projects-description">
            <p>Il s'agit des principaux projets que j'ai réalisés, pour le moment tous issus de la formation Développeur.euse web d'OpenClassrooms. N'hésitez pas à cliquez sur l'un d'entre eux pour avoir davantage d'informations.</p>
          </div>
        </div>
        <div className="tag-list-wrapper">
          <ul>
          <li
            className={`tag-item ${selectedTag === 'Tous' ? 'active' : ''}`}
            onClick={() => {
              setSelectedTag('Tous');
              setFilteredProjects(projectsDatas);
            }}>
          Tous
          </li>
            {Array.from(allTags)
              .filter((tag) => tag !== 'Tous')
              .sort((a, b) => a < b ? -1 : 1)
              .map((tag) => (
                <li key={tag} className={`tag-item ${tag === selectedTag ? 'active' : ''}`}
                onClick={() => {
                  setSelectedTag(tag);
                  setFilteredProjects(
                    projectsDatas.filter((project) => project.tags.includes(tag))
                  );
                }}>
                  {tag}
                </li>
              ))}
          </ul>
      </div>
        <div className="projects-wrapper">
          {filteredProjects.map((project) => (
          <Link to={`/projets/${project.id}`} key={project.id}>
            <div className="project-card">
              <div className="project-card-picture">
                <img src={`${process.env.PUBLIC_URL} ${project.cover}`} alt={project.title}></img>
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