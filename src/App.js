import React, { Component } from "react";
import Nav from "./Components/Nav";
import Wrapper from "./Components/Wrapper";
import Container from "./Components/Container";
import Card from "./Components/Card";
import data from "./data.json"

import EventlyNav from "./Components/EventlyNav"
import "./App.css";

class App extends Component {

  state = {
    data: data
  }

  handleClick = id => {
    console.log("clicked", id)
  }

  render() {
    return (
      <Wrapper>
        <Nav />
        <Container>
          {this.state.data.map( character => (
            <Card 
              key={character.id}
              id={character.id}
              url={character.url}
              clicked={character.clicked}
              handleClick={this.handleClick}
            />
          ))};
        </Container>
      </Wrapper>
  );}};
  


export default App;
