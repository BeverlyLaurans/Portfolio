import { projectsDatas } from "../../datas/projects";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Slideshow from "../../components/Slideshow/Slideshow";
import Error from "../../components/Error/Error";
import "../../styles/scss/pages/Project.scss";

function Project() {
    const { projectId } = useParams();
    const project = projectsDatas.find((project) => project.id === projectId);

    if (!project) {
        return ( <Error /> );
    } else {

        return (
        <div className="project">
            <h1>{project.title}</h1>
            <Link to="/" ><p className="go-back">← Retour</p></Link>
            <Slideshow 
            imgSrc={project.pictures}
            imgAlt={project.title}
            />
            <div className="project__links">
                <a href={project.projectUrl}>Voir le projet</a>
                <a href={project.codeUrl}>Voir le code</a>
            </div>
            <div className="project__details">
                <p>{project.description}</p>
                <h2>Objectif(s) : </h2>
                <ul className="project__details-list">
                    {project.goals.map((goal) => (
                        <li key={`${goal}-${project.id}`}>{goal}</li>
                    ))}
                </ul>
                <h2>Tâches réalisées :</h2>
                <ul className="project__details-list">
                    {project.tasks.map((task) => (
                        <li key={`${task}-${project.id}`}>{task}</li>
                    ))}
                </ul>
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
        </div>
        )

    }
  }
  
  export default Project;