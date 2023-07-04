import { useState } from "react";
import "../../styles/scss/components/Modal.scss";

function Modal(props) {
    const {modalTitle, modalDetails, onClose} = props;
    const [ isModalClose, setIsModalClose ] = useState(false);

    const handleModalClick = (event) => {
        event.stopPropagation();
      };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={handleModalClick}>
                <div className="modal__title">
                    <strong>{modalTitle}</strong>
                    <button onClick={onClose}>X</button>
                </div>
                <div className="modal__details">
                    {modalDetails}
                </div>
            </div>
        </div>
    )
}

export default Modal;