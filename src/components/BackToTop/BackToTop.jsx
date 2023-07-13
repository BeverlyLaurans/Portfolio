import { useEffect, useState } from "react";
import whiteArrow from "../../assets/icons/interactions/white-arrow.svg";
import "../../styles/scss/components/BackToTop.scss";

function BackToTop() {
    const [ backToTopButton, setBackToTopButton ] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 750) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div>
            {backToTopButton && (
                <button className="back-to-top" onClick={scrollToTop}>
                    <img 
                        src={whiteArrow}
                        alt="flèche pour remonter tout en haut de la page"    
                    >
                    </img>
                </button>
            )}
        </div>
    )

}


export default BackToTop;