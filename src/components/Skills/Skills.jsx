import Accordion from "../Accordion/Accordion";
import "../../styles/scss/components/Skills.scss";

function Skills() {
    return (
        <section className="skills">
            <div className="skills__heading">
                <h2>Mes compétences</h2>
                <p>Mon profil s'axe autour du webmarketing et du développement web. Je vous propose de faire un tour d'horizon sur mes principales compétences, et celles que je prévois d'acquérir prochainement !</p>
            </div>
            <div className="skills__list">
                <Accordion />
                <div className="development-skills">
                    <h3>Développement web</h3>
                    <div className="development-skills__list">   
                        <div className="technologies">
                            <h4>Langages & technologies</h4>
                            <p>HTML</p>
                            <p>CSS / SCSS</p>
                            <p>JavaScript</p>
                            <p>React</p>
                            <p>Node.js</p>
                            <p>MongoDB</p>
                            <p>Sass</p>
                        </div>
                        <div className="tools">
                            <h4>Outils</h4>
                            <p>Visual Studio Code</p>
                            <p>Chrome DevTools</p>
                            <p>Figma</p>
                            {/* <p>Jira</p>
                            <p>Postman / Swagger</p> */}
                            <p>Git / GitHub</p>
                            <p>LightHouse</p>
                        </div>
                        <div className="learning-skills">
                            <h4>En cours d'apprentissage</h4>
                            <p>React Native</p>
                        </div>
                        {/* <div className="upcoming-skills">
                            <h4>Prochainement...</h4>
                            <p>React Native</p>
                        </div> */}
                    </div>
                </div>
                <br/>
                <Accordion />
                <div className="webmarketing-skills">
                    <h3>Webmarketing & e-commerce</h3>
                    <div className="webmarketing-skills__list">
                        <div className="skills">
                            <h4>Compétences</h4>
                            <p>Gestion du trafic</p>
                            <p>Référencement naturel</p>
                            <p>Référencement payant</p>
                            <p>Social ads</p>
                            <p>Emailing</p>
                            <p>Marketing automation</p>
                            <p>Gestion de contenu</p>
                            <p>Tracking</p>
                            <p>Analytics</p>
                            <p>Optimisation globale d'un site</p>
                            <p>Optimisation du taux de conversion</p>
                            <p>Image de marque</p>
                            <p>Gestion des avis client</p>
                            <p>Gestion de l'é-réputation</p>
                            <p>Présence en ligne et visibilité</p>
                            <p>RGPD</p>
                        </div>
                        <div className="tools">
                            <h4>Outils</h4>
                            <p>Google Analytics</p>
                            <p>Google Tag Manager</p>
                            <p>Google Ads</p>
                            <p>SEMrush</p>
                            <p>Google</p>
                            <p>Prestashop</p>
                            <p>WordPress</p>
                            <p>TextOptimizer</p>
                            <p>Web Developper extension</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
  
  export default Skills;