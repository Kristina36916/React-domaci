
import './App.css';
import Proizvodi from "./Components/Proizvodi";
import Meni from "./Components/Meni";
import Postovi from "./Components/Postovi";
import Kontakt from "./Components/Kontakt";
import React from 'react'


function App() {
  return (
    <div>
      <Meni> </Meni>
      <Proizvodi></Proizvodi>
      <Postovi></Postovi>
      <Kontakt></Kontakt>
    </div>
    
  );
}

export default App;
