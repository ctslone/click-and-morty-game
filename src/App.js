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
    beenClicked: [],
    status: "Click and character to begin!"
  }

  handleClick = id => {
    // console.log("clicked", id)
    // implementing fisher yates shuffle to get truly random array shuffle
    for (let i = this.state.data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.state.data[i], this.state.data[j]] = [this.state.data[j], this.state.data[i]];
      // console.log(this.state.data)
      this.setState({
        data: this.state.data
      })
    }
    // adding the clicked character id to the beenClicked array inside state
    this.setState({
      beenClicked: this.state.beenClicked.concat(id)
    })
    // if the beenClicked array includes the id of the character that was just clicked, you lose and the score goes to 0 and the beenClicked array resets to empty
    if(this.state.beenClicked.includes(id)) {
      this.setState({
        score: 0,
        beenClicked: [],
        status: "Game over!"
      })
    }
    // otherwise, it is a correct guess so increase the current score by one and the top score by one only once the current score is greater than or equal to the top score
    else {
      this.setState({
        score: this.state.score + 1,
        status: "Keep it up!"
      })
      if (this.state.score >= this.state.topscore) {
        this.setState({
          topscore: this.state.topscore +1
        })
      }
      if (this.state.score === 11) {
        alert("Great job! Yoy guessed correctly every time!")
      }
    }
  }

  render() {
    return (
      <Wrapper>
        <Nav 
          status={this.state.status}
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
