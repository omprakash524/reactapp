import React,{useRef} from "react";
// import { useState } from "react";

export default function TextInputWithFocusButton(){
    const inputE1 = useRef(null);
    const onButtonClick = ()=>{
        // current points to the mounted text input element
        inputE1.current.focus();
    };

    return(
        <>
        <input ref={inputE1} type="text" /> <br></br>
        <button onClick={onButtonClick}>focus the input</button>
        </>
    );
};