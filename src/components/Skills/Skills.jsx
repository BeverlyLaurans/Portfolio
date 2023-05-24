import "../../styles/scss/Skills.scss";

function Skills() {
    return (
        <section className="skills">
            <div className="skills__heading">
                <h2>Mes compétences</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc.</p>
            </div>
            <div className="skills__list">
                <div className="development-skills">
                    <h3>Développement web</h3>
                    <div className="languages">
                        <h4>Languages</h4>
                        <p>Exemple</p>
                    </div>
                    <div className="tools">
                        <h4>Outils</h4>
                        <p>Exemple</p>
                    </div>
                </div>
                <div className="webmarketing-skills">
                    <h3>Webmarketing</h3>
                    <div className="webmarketing-skills__list">
                        <h4>Compétences</h4>
                        <p>Exemple</p>
                    </div>
                    <div className="tools">
                        <h4>Tools</h4>
                        <p>Exemple</p>
                    </div>
                </div>
            </div>
        </section>
    )
  }
  
  export default Skills;