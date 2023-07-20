import { projectsDatas } from "../../datas/projects";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Slideshow from "../../components/Slideshow/Slideshow";
import Error from "../../components/Error/Error";
import "../../styles/scss/pages/Project.scss";

function Project() {
    const { projectId } = useParams();
    const project = projectsDatas.find((project) => project.id === projectId);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    if (!project) {
        return ( <Error /> );
    } else {

        return (
        <div className="project">
            <h1>{project.title}</h1>
            <Link to="/Portfolio" ><p className="go-back">← Retour</p></Link>
            <Slideshow 
            imgSrc={project.pictures}
            imgAlt={project.title}
            />
            <div className="project__links">
                {project.projectUrl && (
                <a href={project.projectUrl} target="_blank">Voir le projet</a>
            )}
                <a href={project.codeUrl} target="_blank">Voir le code</a>
            </div>
            <div className="project__details">
                <p>{project.description}</p>
                <br/>
                <h2>Objectif(s) : </h2>
                <ul className="project__details-list">
                    {project.goals.map((goal) => (
                        <li key={`${goal}-${project.id}`}>{goal}</li>
                    ))}
                </ul>
                {project.tasks.length > 0 ? (
                    <div>
                        <h2>Tâches réalisées :</h2>
                        <ul className="project__details-list">
                            {project.tasks.map((task) => (
                                <li key={`${task}-${project.id}`}>{task}</li>
                            ))}
                        </ul>
                    </div>
                ) : null}
                <h2>Langages & technos utilisés :</h2>
                <ul className="project__details-list">
                    {project.technologies.map((technology) => (
                        <li key={`${technology}-${project.id}`}>{technology}</li>
                    ))}
                </ul>
                <h2>Outils :</h2>
                <ul className="project__details-list">
                    {project.tools.map((tool) => (
                        <li key={`${tool}-${project.id}`}>{tool}</li>
                    ))}
                </ul>
            </div>
            {project.document && (
            <div className="project__links-bonus">
                <a href={project.document} target="_blank">Voir le rapport d'intervention</a>
            </div>
            )}
        </div>
        )

    }
  }
  
  export default Project;