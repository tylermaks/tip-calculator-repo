import React from "react"
import Calculator from "./Calculator"

import './Assets/Styles/AppStyles/App.css';
import logo from "./Assets/images/logo.svg"

function App() {
  return (
    <main className="App">
      <div className="logo-container flex-row-center">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <Calculator />
    </main>
  );
}

export default App;
