const Barbers = ({ barberPhotoOne, barberPhotoTwo }) => {
  return (
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
  )
}
export default Barbers;