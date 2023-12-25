import React from 'react';

function Mycomponent(props){
    return <>
    <h1>I am my component</h1>
    <h3>This is my {props.first}</h3>
    <h3>This is my {props.second}</h3>
    <h3>This is my {props.third}</h3>
    <h3>This is my {props.fourth}</h3>
    </>
};

export default Mycomponent;


// import React from 'react';
// export function Prakash(){
//     return<>
//     <p>I am  props practice</p>
//     <h3> i am props and i am groot</h3>
//     </>
// };
