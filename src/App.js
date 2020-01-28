import React from "react";
import Nav from "./Components/Nav";
import Wrapper from "./Components/Wrapper";
import Container from "./Components/Container";
import Card from "./Components/Card"
import "./App.css";

function App() {
  return (
      <Wrapper>
        <Nav />
        <Container>
          <Card />
        </Container>
      </Wrapper>
  );
}

export default App;
