import React from "react";
import './style.css';

function Bag(props){
    // const bag = {
    //     padding : "120px",
    //     border : "1px solid red",
    //     background : "#fff",
    //     margin: "20x 0"
    // }

    return (
        <div className="bag1">
            {props.children}
        </div>
    );
};

export default Bag;