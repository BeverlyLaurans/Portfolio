import { useState } from "react";
import { skillsDatas } from "../../datas/skills";
import Accordion from "../Accordion/Accordion";
import "../../styles/scss/components/Skills.scss";

function Skills() {
    const [activeAccordion, setActiveAccordion] = useState(0);

    const handleAccordionClick = (index) => {
        setActiveAccordion(index === activeAccordion ? null : index);
    };

    return (
        <section className="skills" id="skills-section">
            <div className="skills__heading">
                <h2>Mes compétences</h2>
                <p>Mon profil s'axe autour du webmarketing et du développement web. Je vous propose de faire un tour d'horizon sur mes principales compétences, et celles que je prévois d'acquérir prochainement !</p>
            </div>
            <Accordion 
                accordionTitle="Développement web"
                isActive={activeAccordion === 0}
                onAccordionClick={() => handleAccordionClick(0)}
                accordionDetails={
                    <div className="skills__list">
                        <div className="skills__list-category">
                            <h4>Langages & technologies :</h4>
                            <ul>
                                {skillsDatas[0]["languages-&-technologies"].map((technology) => (
                                <li key={technology}>{technology}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="skills__list-category">
                            <h4>Outils :</h4>
                            <ul>
                                {skillsDatas[0]["tools"].map((tool) => (
                                <li key={tool}>{tool}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="skills__list-category">
                            <h4>En cours d'apprentissage :</h4>
                            <ul>
                                {skillsDatas[0]["learning-skills"].map((learningSkill) => (
                                <li key={learningSkill}>{learningSkill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                }
                />
                <br/>
                <Accordion 
                accordionTitle="Webmarketing & e-commerce"
                isActive={activeAccordion === 1}
                onAccordionClick={() => handleAccordionClick(1)}
                accordionDetails={
                    <div className="skills__list">
                        <div className="skills__list-category">
                            <h4>Compétences :</h4>
                            <ul>
                                {skillsDatas[1]["skills"].map((skill) => (
                                <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="skills__list-category">
                            <h4>Outils :</h4>
                            <ul>
                                {skillsDatas[1]["tools"].map((tool) => (
                                <li key={tool}>{tool}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                }
                />
        </section>
    )
  }
  
  export default Skills;