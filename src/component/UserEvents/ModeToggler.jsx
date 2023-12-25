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

    let darkModeOn1 = false;
    const darkMode1 = <h1>Dark mode is on</h1>
    const lightmode1 = <h1>Light mode is on</h1>
    function HandleClick1(){
        darkModeOn1 = !darkModeOn1;
        if(darkMode1==true){
            console.log("darkMode1");
        }else{
            console.log("lightmode1");
        }
    }

    function HandleClickRandom(){
        let ranndomNum = Math.floor(Math.random()*3)+1;
        console.log(ranndomNum);
        let UserInput = prompt("Type a number");
        alert(`computer number : ${ranndomNum}, Your guess : ${UserInput}`);
    }

    function Random(){
        let randomNumber = Math.floor(Math.random()*10)+1;
        console.log(randomNumber);
        let useInput1 = prompt("Enter your number");
        window.alert(`Computer gussed number :  ${randomNumber}\nYour guessed number : ${useInput1}`);
    }
    function HandleRandomAndClick(){
        Random();
        HandleClick1();
    }

    function AllFunction(){
        Random();
        HandleClick();
        HandleClick1();
        HandleClickRandom();
        HandleRandomAndClick();
    }
    return(
        <>
        {darkModeOn ? darkMode : lightMode}
        <button onClick={HandleClick}>Click me</button>
        <br></br>
        <button onClick={HandleClick1}>Click1 me</button>
        <br></br>

        <button onClick={HandleClickRandom}>Random</button>
        <br></br>
        <button onClick={HandleRandomAndClick}>Random1</button>
        <br></br>

        <button onClick={AllFunction}>All function in one</button>

        <h2>A confident guy is much more better than a talented guy</h2>

        </>
    );
};

export default ModeToggler;