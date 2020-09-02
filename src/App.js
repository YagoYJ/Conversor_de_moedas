import React from "react";

import Conversor from "./components/Conversor";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Conversor de moedas</h1>
        <span>(Valores fixos)</span>
        <ul>
          <li>
            <strong> USD:</strong> R$5,40
          </li>
          <li>
            <strong> CAD:</strong> R$4,13
          </li>
          <li>
            <strong> EUR:</strong> R$6,44
          </li>
        </ul>
      </header>

      <div className="linha">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className="linha">
        <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
      </div>
      <div className="linha">
        <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
      </div>
    </div>
  );
}

export default App;
