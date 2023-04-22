import React, { useState } from 'react';
import './Carousel.scss';
import prevIcon from '../../../assets/images/prev.svg';
import nextIcon from '../../../assets/images/next.svg';

function Carousel({ images }) {
  const [currentImageIndex, setcurrentImageIndex] = useState(0);

  const nextImage = () => {
    setcurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };

  const prevImage = () => {
    setcurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  return (
    <div className="carousel">
      {images.length > 1 && (
        <button className="carousel-button carousel-button-prev" onClick={prevImage}>
          <img src={prevIcon} alt="previous"/>
        </button>
      )}
      <img src={images[currentImageIndex]} alt="carousel-img" />
      {images.length > 1 && (
        <button className="carousel-button carousel-button-next" onClick={nextImage}>
          <img src={nextIcon} alt="next"/>
        </button>
      )}
    </div>
  );
}

export default Carousel;