import { useState } from "react";
import linkedinIcon from "../../assets/icons/social/linkedin-white-icon.svg";
import "../../styles/scss/components/ContactForm.scss";

function ContactForm() {
  const [showForm, setShowForm] = useState(false);

    return (
    
      <section className="contact">
        <div className="contact__container">
        {!showForm ? (
          <div className="contact-wrapper">
            <h2>Intéressé par mon travail ?<br />Parlons-en !</h2>
              <p>Je suis actuellement ouverte aux différentes opportunités : CDI, CDD, alternance...</p>
              <button className="contact-btn" onClick={() => setShowForm(true)}>Contactez-moi</button>
          </div>
        ) : (
          <div className="contact-wrapper">
            <div className="go-back">
            <button onClick={() => setShowForm(false)}>← Retour</button>
            </div>
            <div className="social-links">
              <a href="https://fr.linkedin.com/in/beverlylaurans"><img src={linkedinIcon} alt="Icône LinkedIn"></img></a>
            </div>
            <div className="contact-info">
              <p>beverly.laurans [@] gmail.com</p>
            </div>

          </div>
        ) }
        </div>
      </section>
  
    )
  }
  
  export default ContactForm;