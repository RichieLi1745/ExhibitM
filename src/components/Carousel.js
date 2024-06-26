import carouselPhotoOne from '../photos/LND6592.jpg';
import carouselPhotoTwo from '../photos/Guy-Riggio-Stylist.jpg';
import carouselPhotoThree from '../photos/Buddy_Porter__Stylist_-_new_to_salon.jpg';

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-photo-container">
        <img className="carousel-photo" src={carouselPhotoOne} alt="carousel One" />
        <div className="carousel-text">BARBER NAME, BARBER</div>
      </div>
      <div className="carousel-photo-container">
        <img className="carousel-photo" src={carouselPhotoTwo} alt="carousel Two" />
        <div className="carousel-text">BARBER NAME, BARBER</div>
      </div>
      <div className="carousel-photo-container">
        <img className="carousel-photo" src={carouselPhotoThree} alt="carousel Three" />
        <div className="carousel-text">BARBER NAME, BARBER</div>
      </div>
    </div>
  );
}

export default Carousel;