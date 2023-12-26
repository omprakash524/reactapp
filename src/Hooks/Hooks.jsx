// import React from "react";
// import { useState } from "react";

// export default function InputComponent(){
//     const[inputText,setText] = useState('Hello1');

//     function HandleChange(e){
//         setText(e.target.value);
//     }

//     return(
//         <>
//         <input value={inputText} onChange={HandleChange} />
//         {/* <input onChange={HandleChange} /> */}
//         <p>typed: {inputText}</p>
//         <button onClick={()=>setText('Helo')}>Reset</button>
//         </>
//     );
// };

import React from "react";
import { useState } from "react";
export default function InputC(){
    const[inputText, setText] = useState('i am om');

    function HandleChange(e){
        setText(e.target.value);
    }
    return(
        <>
        <input value={inputText} onChange={HandleChange}/>
        <p>Typed : {inputText} </p>
        <input value={inputText}></input>
        <button onClick={()=>setText('hello')}>Reset</button>
        </>
    )
}
