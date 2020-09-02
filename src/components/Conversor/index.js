import React, { Component } from "react";

import "./styles.css";

export default class Conversor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moedaA_valor: "",
      moedaB_valor: 0,
    };

    this.converter = this.converter.bind(this);
  }

  converter() {
    const usd = 5.4;
    const cad = 4.13;
    const eur = 6.44;

    let moedaA_valor = this.props.moedaA;
    let moedaB_valor = this.props.moedaB;

    if (moedaA_valor === "USD") {
      moedaB_valor = parseFloat(this.state.moedaA_valor / usd).toFixed(2);
    } else if (moedaA_valor === "CAD") {
      moedaB_valor = parseFloat(this.state.moedaA_valor / cad).toFixed(2);
    } else if (moedaA_valor === "EUR") {
      moedaB_valor = parseFloat(this.state.moedaA_valor / eur).toFixed(2);
    } else if (moedaA_valor === "BRL") {
      if (moedaB_valor === "USD") {
        moedaB_valor = parseFloat(this.state.moedaA_valor * usd).toFixed(2);
      } else if (moedaB_valor === "CAD") {
        moedaB_valor = parseFloat(this.state.moedaA_valor * cad).toFixed(2);
      } else if (moedaB_valor === "EUR") {
        moedaB_valor = parseFloat(this.state.moedaA_valor * eur).toFixed(2);
      }
    }

    this.setState({ moedaB_valor });
  }

  render() {
    return (
      <div className="conversor">
        <h2>
          {this.props.moedaA} para {this.props.moedaB}
        </h2>
        <input
          type="text"
          onChange={(event) => {
            this.setState({ moedaA_valor: event.target.value });
          }}
        />
        <input type="button" value="Converter" onClick={this.converter} />
        <h2>R${this.state.moedaB_valor}</h2>
      </div>
    );
  }
}
