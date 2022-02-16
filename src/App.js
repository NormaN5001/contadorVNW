import React, { Component } from "react";
import './App.css';


export default class App extends Component {
  state = {
    number: 0,
    msg: "Mini Contador"
  };

  add = () => {
    if (this.state.number < 10) {
      this.setState({
        number: this.state.number + 1,
        msg: "Mini Contador"
      });
    } else {
      this.setState({
        msg: "O máximo é 10!"
      });
    }
  };

  reset = () =>{
    this.setState({
      number: this.state.number =0,
      msg: "Mini Contador"
    });
  };

  remove = () => {
    if (this.state.number > 0) {
      this.setState({
        number: this.state.number - 1,
        msg: "Mini Contador"

      });
    } else {
      this.setState({
        msg: "O mínimo é 0!"
      });
    }
  };

  render() {
    return (
      <div className = "box">
        <div>
             <button className="add" onClick={this.add}>Somar</button>
              <h1>{this.state.number}</h1>
              <button className="remove" onClick={this.remove}>Subtrair</button>
              <h2>{this.state.msg}</h2>
              <button className="reset" onClick={this.reset}>Resetar</button>
        </div>
      </div>
    );
  }
}