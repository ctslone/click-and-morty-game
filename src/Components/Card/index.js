import React from "react";
import "./style.css";

const Card = (props) => {
    return (
        <div className="card col-2 ml-3 mr-3 mb-3">
            <img onClick={() => props.handleClick(props.id)} clicked={props.clicked} key={props.id} id={props.id} src={props.url} className="card-img-top" alt="..." />
        </div>
    )
}

export default Card;