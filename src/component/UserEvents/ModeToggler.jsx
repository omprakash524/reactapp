import React from "react";

function ModeToggler(){
    let darkModeOn = false;
    const darkMode = <h1>Dark Mode is on</h1>
    const lightMode = <h1>Light Mode is on</h1>

    function HandleClick(){
        darkModeOn = !darkModeOn; 
        if(darkModeOn == true){
            console.log("Dark mode is on");
        }else{
            console.log("Light mode is on");
        }
    }
    return(
        <>
        {darkModeOn ? darkMode : lightMode}
        <button onClick={HandleClick}>Click me</button>
        </>
    );
};

export default ModeToggler;