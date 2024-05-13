import React from 'react';


const Maps = ({ map }) => {
  const toggleModal = () => {
    const choice = window.confirm("Choose 'OK' for Apple Maps or 'Cancel' for Google Maps");
    if (choice) {
      window.open("https://maps.apple.com/?ll=33.680781,-117.883686&q=Sobeca%20%E2%80%94%20Costa%20Mesa&spn=0.018478,0.022979&t=m", "_blank");
    } else {
      window.open("https://www.google.com/maps/place/Mitsuwa+Marketplace/@33.6813999,-117.8865749,17z/data=!3m1!4b1!4m6!3m5!1s0x80dcdf18d4624d87:0xe5f53a926eebb3e1!8m2!3d33.6814!4d-117.884!16s%2Fg%2F1tfg7zqv?entry=ttu", "_blank");
    }
  };
  return (
    <div className="map-container">
      <img className="map" src={map} alt="map" onClick={toggleModal}/>
    </div>
  )
}
export default Maps;