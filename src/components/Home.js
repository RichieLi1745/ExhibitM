import React from 'react';
import logo from '../photos/LOGO.png';
import haircutPhoto from '../photos/HAIR CUTTING.PNG';
import barberPhotoTwo from '../photos/HEADSPA.PNG';
import barberPhotoOne from '../photos/BARBER2.PNG';
import shop from '../photos/PRODUCT.jpg';
import map from '../photos/MAP.PNG';
import info from '../photos/info.png';
import social from '/Users/richardli/Desktop/exhibitm/src/photos/ICONS.PNG';
import NavBar from './Navbar';
import Barbers from './Barbers';
import Carousel from './Carousel';
import ShopSection from './ShopSection';
import Maps from './Maps';

function Home() {
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
        <NavBar/>
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
      <Barbers barberPhotoOne={barberPhotoOne} barberPhotoTwo={barberPhotoTwo}/>
      <Carousel/>
      <ShopSection shop={shop}/>
      <div className="map-info-social">
        <Maps map={map}/>
        <img className="info" src={info} alt="Store Info"/>
        <img className="social" src={social} alt="Social Media"/>
      </div>
    </div>
  );
}

export default Home;
