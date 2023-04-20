import React, { useState } from 'react';
import './Carousel.scss';
import prevIcon from '../../../assets/images/prev.svg';
import nextIcon from '../../../assets/images/next.svg';

function Carousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  return (
    <div className="carousel">
      <button className="carousel-button carousel-button-prev" onClick={prevImage}>
        <img src={prevIcon} alt="previous"/>
      </button>
      <img src={images[currentImage]} alt="carousel-img" />
      <button className="carousel-button carousel-button-next" onClick={nextImage}>
        <img src={nextIcon} alt="next"/>
      </button>
    </div>
  );
}

export default Carousel;