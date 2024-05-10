
import './App.css';
import logo from '/Users/richardli/Desktop/exhibitm/src/photos/LOGO.png';
import haircutPhoto from '/Users/richardli/Desktop/exhibitm/src/photos/HAIR CUTTING.PNG';
import barberPhotoTwo from '/Users/richardli/Desktop/exhibitm/src/photos/HEADSPA.PNG';
import barberPhotoOne from '/Users/richardli/Desktop/exhibitm/src/photos/BARBER2.PNG';
import carouselPhotoOne from '/Users/richardli/Desktop/exhibitm/src/photos/LND6592.jpg';
import carouselPhotoTwo from '/Users/richardli/Desktop/exhibitm/src/photos/Guy-Riggio-Stylist.jpg';
import carouselPhotoThree from '/Users/richardli/Desktop/exhibitm/src/photos/Buddy_Porter__Stylist_-_new_to_salon.jpg';
function App() {
  return (

    <div className="App">
      <div className="message-header">
        FREE SHIPPING ON ORDERS OVER $50</div>
      <div className="logo-navbar">
        <header className="App-header">
          <img className="logo" src={logo} alt="Exhibit M" />
          <h4 className="logo-name">
            Exhibit:M
          </h4>
        </header>
        <div className="nav-bar">
            <p>SALON</p>
            <p>HEAD SPA</p>
            <p>STYLISTS</p>
            <p>UN|CUT</p>
            <p>SHOP</p>
            <p>BOOK</p>
        </div>
      </div>

      <div className="image-container">
        <img className="haircut-photo" src={haircutPhoto} alt="Haircut" />
        <img className="logo-ontop" src={logo} alt=""/>
        <div className="overlay"></div>
        <div className="message-ontop">
          Book Your Experience
        </div>
        <div className="below-haircut-photo">
          <div className="second-message">
            Exhibit Your Best
          </div>
          <div className="line-one"></div>
          <div className="line-icon-container">
            <img className="middle-icon" src={logo} alt="Middle Icon" />
          </div>
          <div className="line-two"></div>

          <div className="third-message">
            Exhibit:M works with you to help you curate your best look through our process,technique and education. Every service is custom-tailored to you,because we understand that style requires care.
          </div>
        </div>
      </div>
      <div className="barbers">
        <div className="barber-container">
          <img className="barber-photo-one" src={barberPhotoOne} alt="barber one" />
          <div className="barber-overlay"></div>
          <div className="barber-text">SALON</div>
        </div>
        <div className="barber-container">
          <img className="barber-photo-two" src={barberPhotoTwo} alt="barber two"/>
          <div className="barber-overlay"></div>
          <div className="barber-text">HEAD SPA</div>
        </div>

      </div>
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


    </div>
  );
}

export default App;
