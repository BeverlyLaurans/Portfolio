import { useState, useContext } from "react";
import { ThemeContext } from '../../context/ThemeContext';
import whiteArrow from "../../assets/icons/interactions/white-arrow.svg";
import darkArrow from "../../assets/icons/interactions/dark-arrow.svg";
import "../../styles/scss/components/Accordion.scss";

function Accordion(props) {
    const {accordionTitle, accordionDetails, isActive, onAccordionClick} = props;
    const { theme } = useContext(ThemeContext);

    return (
    <div className={`accordion ${theme}`}>
        <button
            className={`accordion__title ${isActive ? "active" : ""}`}
            onClick={onAccordionClick}
        >
            <h3>{accordionTitle}</h3>
            <img
            className={`${isActive ? "active" : ""}`}
            src={(theme === 'dark' ? darkArrow : whiteArrow)}
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