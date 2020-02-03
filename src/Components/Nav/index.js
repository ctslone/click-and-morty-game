import React from "react";
import "./style.css";

function Nav(props) {
    // return <div className="wrapper">{props.children}</div>;
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li className="brand">
                        <a href="/">Click-and-Morty</a>
                    </li>
                    <li>{props.status}</li>
                    <li>Score: {props.score} | Top Score: {props.topscore}</li>
                </ul>
            </nav>

            <div className="jumbotron jumbotron-fluid rickandmortytron">
                <div className="container">
                    <h1 className="display-4 text-center main-title">Click and Morty</h1>
                    <p className="lead text-center">Click on an image to earn points, but don't click on any more than once!</p>
                </div>
            </div>
            
        </div>

    )
}

export default Nav;