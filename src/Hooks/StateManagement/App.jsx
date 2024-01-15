import React from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";

function MyApp(){
    const[fruits] = React.useState([
        {fruitName: 'apple',id:1},
        {fruitName: 'banana',id:12},
        {fruitName: 'plum',id:13},
        {fruitName: 'orange',id:13},
    ]);

    return (
        <div className="App">
            <h1>Where should the state go?</h1>
            <Fruits fruits={fruits}/>
            <FruitsCounter fruits={fruits} />
        </div>
    );
};

export default MyApp;