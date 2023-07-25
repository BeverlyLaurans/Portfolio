import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import closeIcon from "../../assets/icons/interactions/close-icon.svg";
import whiteCloseIcon from "../../assets/icons/interactions/white-close-icon.svg";
import "../../styles/scss/components/Modal.scss";

function Modal(props) {
  const { modalTitle, modalDetails, onClose } = props;
  const { theme } = useContext(ThemeContext);

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className={`modal ${theme}`} onClick={handleModalClick}>
        <div className="modal__title">
          <strong>{modalTitle}</strong>
          <img
            src={theme === "dark" ? whiteCloseIcon : closeIcon}
            alt="Icône de fermeture"
            onClick={onClose}
          ></img>
        </div>
        <div className="modal__details">{modalDetails}</div>
      </div>
    </div>
  );
}

export default Modal;
