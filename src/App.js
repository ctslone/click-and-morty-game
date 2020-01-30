import React, { Component } from "react";
import Nav from "./Components/Nav";
import Wrapper from "./Components/Wrapper";
import Container from "./Components/Container";
import Card from "./Components/Card";
import data from "./data.json"

// import EventlyNav from "./Components/EventlyNav"
import "./App.css";

class App extends Component {

  state = {
    data: data,
    score: 0,
    topscore: 0,
    beenClicked: []
  }

  handleClick = id => {
    console.log("clicked", id)
    this.setState({
      beenClicked: this.state.beenClicked.concat(id)
    })
    if(this.state.beenClicked.includes(id)) {
      // console.log("false")
      this.setState({
        score: 0,
        beenClicked: []
      })
    }
    else {
      this.setState({
        score: this.state.score + 1
      })
      if (this.state.score >= this.state.topscore) {
        this.setState({
          topscore: this.state.topscore +1
        })
      }
    }
  }

  render() {
    return (
      <Wrapper>
        <Nav 
          score={this.state.score}
          topscore={this.state.topscore}
        />
        <Container>
          {this.state.data.map( character => (
            <Card 
              key={character.id}
              id={character.id}
              url={character.url}
              clicked={character.clicked}
              handleClick={this.handleClick}
            />
          ))}
        </Container>
      </Wrapper>
  )}}
  


export default App;
