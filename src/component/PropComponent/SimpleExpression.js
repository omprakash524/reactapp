import React from "react";

function Simpleexpression(){
    return(
        <>
            <h3>I am jsx</h3>
        <ul>
            <li>{"He" + "llo"}</li>
            <li>{2}</li>
            <li>{1 < 2}</li>
            <li>{2 < 1}</li>
        </ul>
        </>
    );
};

export default Simpleexpression;