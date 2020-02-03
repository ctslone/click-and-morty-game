# Click and Morty

Do you like Rick and Morty? Do you like memory games? Even if you don't know what Rick and Morty is, you should test your memory with this React app! Try to get the top score by clicking each character only once...but wait! There is a twist.

## Getting Started

Want to try it out?
Just follow this link: [Click and Morty](https://click-and-morty.herokuapp.com/)

* Start the game by clicking on any of the 12 characters.
* Each character you click adds one point to your score, but you can only click a character ONCE.
* The characters shuffle to a completely random location after every click (Fisher-Yates shuffle alogorithm).
* If you click the same character twice, the game resets and you start over at zero!

If you would like to clone this game to your machine, simply clone the reposiitory, navigate to the root folder (click-and-morty-game) within your CLI, run `npm install` to download all dependencies, finally run `npm start`. NOTE: This application uses React.

## Mobile Friendly

This React game is fully mobile responsive, yo you can view it on your phone, tablet or desktop.

Feel free to open the app on your favorite mobile device or use the developer tools in your favorite browser to view the mobile layout

## Challenges

A few challenges that I faced when creating this application were:
* Being new to React, learning how to utilize components and state together was the biggest hurdle to overcome. I am still expanding my knowledge of React.
* Randomizing the placement of the characters. I originally was going to implement `0.5 - Math.random()` but found out through some research that using this method does not produce truly random results. To truly randomize it, I adopted the Fisher-Yates shuffle algorithm. You can read more about it [here](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).

## Built With

* [React](https://reactjs.org/) 
* [Bootstrap](https://bootstrap.com)
* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)

## Authors

* Charlie Slone
    * [GitHub](https://github.com/ctslone)
    * [LinkedIn](https://www.linkedin.com/in/charlie-slone-704311a9/)
    * [Portfolio](https://ctslone.github.io/Updated-Portfolio/)