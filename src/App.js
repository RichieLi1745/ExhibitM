
import './App.css';
import logo from '/Users/richardli/Desktop/exhibitm/src/photos/LOGO.jpg';
import haircutPhoto from '/Users/richardli/Desktop/exhibitm/src/photos/HAIR CUTTING.PNG';
function App() {
  return (

    <div className="App">
      <div className="message-header">FREE SHIPPING ON ORDERS OVER $50</div>
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
        <div className="image-container">
          <img className="haircut-photo" src={haircutPhoto} alt="Haircut" />
          <img className="logo-ontop" src={logo} alt=""/>
          <div className="overlay"></div>
          <div className="message-ontop">Book Your Experience</div>
          <div className="second-message">Exhibit Your Best</div>
          <div className="third-message">Exhibit:M works with you to help you curate your best look through our process,
              technique and education. Every service is custom-tailored to you,because we understand that style requires care.</div>
          </div>

    </div>
  );
}

export default App;
