import React from 'react';

function Main(props){
    // return <h1>Hello i am groot from main</h1>
    return <>
    <h2>I am main and sending props</h2>
    <p>Using props {props.greet}.</p>
    </>
};

export default Main;