import carouselPhotoOne from '/Users/richardli/Desktop/exhibitm/src/photos/LND6592.jpg';
import carouselPhotoTwo from '/Users/richardli/Desktop/exhibitm/src/photos/Guy-Riggio-Stylist.jpg';
import carouselPhotoThree from '/Users/richardli/Desktop/exhibitm/src/photos/Buddy_Porter__Stylist_-_new_to_salon.jpg';

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-photo-container">
        <img className="carousel-photo" src={carouselPhotoOne} alt="Photo One" />
        <div className="carousel-text">BARBER NAME, BARBER</div>
      </div>
      <div className="carousel-photo-container">
        <img className="carousel-photo" src={carouselPhotoTwo} alt="Photo Two" />
        <div className="carousel-text">BARBER NAME, BARBER</div>
      </div>
      <div className="carousel-photo-container">
        <img className="carousel-photo" src={carouselPhotoThree} alt="Photo Three" />
        <div className="carousel-text">BARBER NAME, BARBER</div>
      </div>
    </div>
  );
}

export default Carousel;