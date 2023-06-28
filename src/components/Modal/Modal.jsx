import Slideshow from "../Slideshow/Slideshow"
import "../../styles/scss/components/Modal.scss";

function Modal() {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal__title">
                    <strong>Titre de la modale</strong>
                    <img></img>
                </div>
                <div className="modal__details">
                    
                </div>
            </div>
        </div>
    )
}

export default Modal;