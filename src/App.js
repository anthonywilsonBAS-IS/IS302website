import logo from './logo.svg';
import './App.css';

function App(){
  return (
    <>
      
  <div className="container">

  
   <div style={{textAlign: "center"}}>
     <img src="marshaw24Seahawk.jpg" alt="Beast Mode" width="900" height="300"/>
     <h1 className="name"><span className="name w3-padding w3-round" style={{fontWeight: "bolder"}}>Anthony Wilson sr Bio</span></h1>
     <h2 className="subtext name w3-padding w3-round"                style={{fontWeight: "bolder"}}>This is me and what I do!!</h2>
  </div>
  <div className="links-container">
         <a href="#" className="w3-button w3-round w3-brown w3-hover-blue-grey link skew-2" target="_blank"><span className="skew-text-2">My Family</span></a>
      <a href="#" className="w3-button w3-round w3-blue w3-hover-blue-grey link skew-1" target="_blank"><span className="skew-text-1">Hunting</span></a>
      <a href="#" className="w3-button w3-round w3-deep-orange w3-hover-blue-grey link skew-2" target="_blank"><span className="skew-text-2">Fishing</span></a>
      <a href="#" className="w3-button w3-round w3-blue w3-hover-blue-grey link skew-1" target="_blank"><span className="skew-text-1">Gardening</span></a>
      <a href="#" className="w3-button w3-round w3-red w3-hover-blue-grey link skew-2" target="_blank"><span className="skew-text-2">Glass blowing</span></a>

    <i> data-feather="arrow-up-circle"</i> 
    </div>
  </div>
    </>
  );
}

export default App;
