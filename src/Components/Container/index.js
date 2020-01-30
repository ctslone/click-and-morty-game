import React from "react";
import "./style.css";

function Container(props) {
    // return <div className="wrapper">{props.children}</div>;
    return (
        <div className="container">
            <div className="row justify-content-center">{props.children}</div>
        </div>
    )
}

export default Container;