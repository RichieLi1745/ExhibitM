import React from 'react';
import './LandingPage.css';
import './LandingPageSecret.css';
import cat from '../photos/CAT LOGO-1,CAT LOGO-2/CAT LOGO-2.png';
import insta from '../photos/INSTA LINK-1,INSTA LINK-2/INSTA LINK-2.png';
import yelp from '../photos/YELP LINK-1,YELP LINK-2/YELP LINK-2.png';


const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="LP-header-plus-logo">
        <h1 className="LP-header" >exhibit M</h1>
        <img className="cat-logo" src={cat} alt="logo" />
      </div>
      <div className="LP-messages">
        <p className="LP-message-1"> Join us Q4 '24 for an unforgettable experience.</p>
        <p className="LP-message-2"> Hair Styling and Head Spa </p>
        <p className="LP-message-3"> Subscribe to get the latest updates on our Services and Grand Opening. </p>
      </div>
      <img className="LP-image-1" src={insta} alt="Insta" />
      <img className="LP-image-2" src={yelp} alt="Yelp" />
    </div>
  );
}
export default LandingPage;