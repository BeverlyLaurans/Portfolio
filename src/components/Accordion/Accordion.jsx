import whiteArrow from "../../assets/icons/interactions/white-arrow.svg";
import "../../styles/scss/components/Accordion.scss";

function Accordion(props) {
    const {accordionTitle, accordionDetails, isActive, onAccordionClick} = props;

    return (
    <div className="accordion">
        <button
            className={`accordion__title ${isActive ? "active" : ""}`}
            onClick={onAccordionClick}
        >
            <h3>{accordionTitle}</h3>
            <img
            className={`${isActive ? "active" : ""}`}
            src={whiteArrow}
            alt={`${isActive ? "flèche vers le haut" : "flèche vers le bas"}`}
            />
        </button>
        <div className={`accordion__details ${isActive ? "active" : ""}`}>
            {accordionDetails}
        </div>
    </div>
    )
}

export default Accordion;