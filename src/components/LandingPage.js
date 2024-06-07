import React from 'react';
import './LandingPage.css';
import logo from '../photos/XMLOGO-1,XMLOGO-2/XMLOGO-2.png';
import insta from '../photos/INSTA LINK-1,INSTA LINK-2/INSTA LINK-2.png';
import yelp from '../photos/YELP LINK-1,YELP LINK-2/YELP LINK-2.png';


const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="LP-header-plus-logo">
        <h1 className="LP-header" >exhibit M</h1>
        <img className="cat-logo" src={logo} alt="logo" />
      </div>
      <div className="LP-messages">
        <p className="LP-message-1"> Hair Styling and Head Spa coming Fall/Winter </p>
        <p className="LP-message-2"> Subscribe to get the latest updates <br/>
        on our Services and Grand Opening. </p>
      </div>
      <div className="LP-subscribe">Subscribe</div>
      <a href="https://www.instagram.com/xhbt.m/">
        <img className="LP-image-1" src={insta} alt="Insta"  />
      </a>
      <img className="LP-image-2" src={yelp} alt="Yelp" />
    </div>
  );
}
export default LandingPage;