import React from "react";
import "./style.css";

function Card(props) {
    // return <div className="wrapper">{props.children}</div>;
    return (
            <div className="card">
                <img src="https://place-hold.it/300" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
    )
}

export default Card;