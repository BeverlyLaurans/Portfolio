import "../../styles/scss/components/Formation.scss";

function Formation() {

  return (
    <section className="formation-container">
        <h2>Mes diplômes</h2>
        <div className="formation">
            <h3>DÉVELOPPEU(R/SE) INTÉGRAT(EUR/RICE) WEB </h3>
            <p>OpenClassrooms - 2023</p>
        </div>
        <div className="formation">
            <h3>MASTER WEBMARKETING</h3>
            <p>ECV Digital à Nantes (44) - 2018</p>
        </div>
        <div className="formation">
            <h3>LICENCE PROFESSIONNELLE TICARC : Community Manager</h3>
            <p>IUT de la Roche-Sur-Yon (85) - 2016</p>
        </div>
        <div className="formation">
            <h3>DUT TECHNIQUES DE COMMERCIALISATION</h3>
            <p>IUT de Poitiers, site de Châtellerault (86) - 2015</p>
        </div>
        <div className="formation">
            <h3>BACCALAURÉAT LITTÉRAIRE - Spécialité Mathématiques</h3>
            <p>Lycée Marcelin Berthelot à Châtellerault (86) - 2013</p>
        </div>
    </section>
  );
}

export default Formation;