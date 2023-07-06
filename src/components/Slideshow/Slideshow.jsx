import { useState, useEffect } from "react";
import previousArrow from "../../assets/icons/arrows/previous-arrow.svg";
import nextArrow from "../../assets/icons/arrows/next-arrow.svg";
import "../../styles/scss/components/Slideshow.scss";

function Slideshow(props) {
  const {imgSrc, imgAlt} = props;
  const [imageIndex, setImageIndex] = useState(0);
  const [activeCircleIndex, setActiveCircleIndex] = useState(0);

  useEffect(() => {
    setActiveCircleIndex(imageIndex);
  }, [imageIndex]);
    
  function nextPicture() {
    if (imageIndex === imgSrc.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }

  function previousPicture() {
    if (imageIndex === 0) {
      setImageIndex(imgSrc.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  }

  if (imgSrc.length === 1) {
    return (
      <div className="slideshow">
        <img src={imgSrc[imageIndex]} alt={imgAlt} className="slideshow__image"/>
        </div>
    )
  } else {

    return (
        <div className="slideshow">
            <img src={imgSrc[imageIndex]} alt={imgAlt}/>
            <div className="slideshow__informations">
              <div className="slideshow__navigation">
                  <button onClick={previousPicture}><img src={previousArrow} alt="Flèche précédent"/></button>
                  <button onClick={nextPicture}><img src={nextArrow} alt="Flèche suivant"/></button>
              </div>
            </div>
            <div className="slideshow__pagination">
                {imgSrc.map((image, index) => (
                  <div
                    key={index}
                    className={`slideshow__circle ${
                      index === activeCircleIndex ? "active" : ""
                    }`}
                    onClick={() => setImageIndex(index)}
                  ></div>
                ))}
            </div>
        </div>
    )

  }
}

export default Slideshow;