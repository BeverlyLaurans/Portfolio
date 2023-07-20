import Avatar from "../../assets/avatar/photo-BL.jpg"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/scss/components/Error.scss";

function Error() {
  const navigate = useNavigate();

  const backToTopHome = () => {
    window.scrollTo(0, 0);
    navigate("/");
  };

    return (
      <section className="error">
        <div className="error__title">
          <p>4</p>
          <img src={Avatar} alt="Photo de Beverly"></img>
          <p>4</p>
        </div>
        <div className="error__details">
          <p>Il semblerait que la page que vous cherchez n'existe pas.</p>
          <Link to="/Portfolio" onClick={backToTopHome}><strong>Retourner à la page d'accueil</strong></Link>
        </div>
      </section>
    )
  }
  
  export default Error;