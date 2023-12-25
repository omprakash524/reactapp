import React from "react";

function Apples(props){
    return (
        <div className="promo-section">
            <div>
                <h2>These apples are: {props.color}</h2>
            </div>
            <div>
                <h3>There are {props.number} apples</h3>
            </div>

            <div>
                <h1>{props.heading}</h1>
            </div>

            <div>
                <h2>{props.promoSubHeding}</h2>
            </div>
        </div>
    );
};

export default Apples;

// function Pears(props){
//     return (
//         <h2>I don't like pears, but my friend, {props.friend}, does</h2>
//     );
// };


// <Exmple children={<Hello/>}/>
// <Exmple children={<Hello message="Hello there"/>}/>