// import React from "react";

// function Btn(){
//     const clickHandler = () => console.log('you have clicked on t');
//     return(
//         <>
//         <button onClick={clickHandler}>click</button>
//         </>
//     )
// }

// export default Btn;

import React from "react";

function Btn(){
    const clickHandler = () => console.log('you have overed mouse');
    const clickHandler1 = () => console.log("you have clicked on it");

    function thirdExample(){
        console.log('Third example');
    }
    return(
        <>
        <button onMouseOver={clickHandler}>click</button> <br></br>
        <button onClick={clickHandler1}>click1</button>
        <br></br>

        {/* Handling events using inline anonymous ES5 functions */}
        <button onClick={function(){console.log("first example")}}>
            An inline anonymous ES5 function event andler
        </button>
        <br></br>

        <button onClick={()=>console.log('second example')}>
            An inline anonymous ES6 function event handler
        </button>
        <br></br>

        <div className="thirdExample">
            <button onClick={thirdExample}>
                Handling events using separate function declarations
            </button>
        </div>

        
        </>
    )
}



export default Btn;