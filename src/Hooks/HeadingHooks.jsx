import React from "react";
// import { useState } from "react";
import Heading from "./Heading";

function HeadingHook(){
    // const[word, setWord] = useState('Eat');
    const[word, setWord] = React.useState('Eat');

    function HandleClick(){
        setWord('Drink');
    }
    // function HandleClick(){
    //     setWord('word');
    // }

    return(
        <>
        <Heading message={word+" at little lemon"}/>
        <button onClick={HandleClick}>Click here</button>
        </>
    );
};

export default HeadingHook;