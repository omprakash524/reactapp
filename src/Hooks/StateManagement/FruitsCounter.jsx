import React from "react";

function FruitsCounter(props){
    return(
        <h2>Totoal fruits: {props.fruits.length}</h2>
    )
}

export default FruitsCounter;