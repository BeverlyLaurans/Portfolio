import Avatar from "../../assets/avatar/photo-BL.jpg"
import { Link } from "react-router-dom";
import "../../styles/scss/components/Error.scss";

function Error() {
    return (
      <div className="error">
        <div className="error-404">
          <p>4</p>
          <img src={Avatar} alt=""></img>
          <p>4</p>
        </div>
        <div className="error-informations">
          <p>Il semblerait que la page que vous cherchez n'existe pas.</p>
          <Link to="/" ><strong>Retourner à la page d'accueil</strong></Link>
        </div>
      </div>
    )
  }
  
  export default Error;