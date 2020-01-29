import React from "react";
import "./style.css";

function Card(props) {
    // return <div className="wrapper">{props.children}</div>;
    return (
            <div className="card col-2 ml-5 mr-3 mb-5">
                <img src="https://place-hold.it/300" className="card-img-top" alt="..." />
            </div>
    )
}

export default Card;