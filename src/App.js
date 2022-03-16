import React, { Component } from "react";
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const Box = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10vh;
  flex-direction: column;
`
const Add = styled.button`
  width: 150px;
  height: 35px;
  background-color: green;
  border-style: none;
  border-radius: 3px;
`
const Remove = styled.button`
  width: 150px;
  height: 35px;
  background-color: red;
  border-style: none;
  border-radius: 3px;
`
const Text2 = styled.h2`
  margin-top: 30px;
`
const Reset = styled.button`
  width: 150px;
  height: 35px;
  background-color: blue;
  border-style: none;
  border-radius: 3px;
  margin-top: 5px;
`

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
      <div>
      <GlobalStyle/>
        <Box>
             <Add onClick={this.add}>Somar</Add>
              <h1>{this.state.number}</h1>
              <Remove onClick={this.remove}>Subtrair</Remove>
              <Text2>{this.state.msg}</Text2>
              <Reset onClick={this.reset}>Resetar</Reset>
        </Box>
      </div>
    );
  }
}
