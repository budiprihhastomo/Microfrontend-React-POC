import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App(props) {
  useEffect(() => {
    console.log("List Props Dari Parent : ", props);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={`${process.env.REACT_APP_CONTENT_HOST}${logo}`}
          className="App-logo"
          alt="logo"
        />
        <p>Ini adalah MicroFrontEnd Dari Port 4000</p>
        <span onClick={() => alert("Oh My God! Aku Diklik")}>Klik Aku ! </span>
      </header>
    </div>
  );
}

export default App;
