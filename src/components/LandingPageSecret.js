import React from 'react';
import './LandingPage.css';
import './LandingPageSecret.css';
import cat from '../photos/CAT LOGO-1,CAT LOGO-2/CAT LOGO-2.png';
import insta from '../photos/INSTA LINK-1,INSTA LINK-2/INSTA LINK-2.png';
import yelp from '../photos/YELP LINK-1,YELP LINK-2/YELP LINK-2.png';
import Subscribe from './Subscribe';

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="LP-header-plus-logo">
        <h1 className="LP-header" >exhibit M</h1>
        <img className="cat-logo" src={cat} alt="logo" />
      </div>
      <div className="LP-messages">
        <p className="LP-message-1"> Your Curiosity Will Be Rewarded.</p>
        <p className="LP-message-2"> Use CODE: XHBTMANKIND <br/>
        when booking a future service <br/>
        to receive a limited gift.* </p>
        <p className="LP-message-3"> Subscribe to get the latest updates <br/> on our Services and Grand Opening.
      </p>
      <Subscribe />
      </div>
      <img className="LP-image-1" src={insta} alt="Insta" />
      <img className="LP-image-2" src={yelp} alt="Yelp" />
      <p>*Limited to the first 100 bookings</p>
    </div>
  );
}
export default LandingPage;