import React from "react";

function Nav(props){
    return(
        <ul>
            <li>{props.first}</li>
        </ul>
        // [10,20,30].forEach(item => item*10);
        // [10,20,30].forEach(function(item){
        //     return item*10;
        // })
    );
};

// const Nav1 = (props) =>{
//     return(
//         <>
//         <ul>
//             <li>{props.first}</li>
//         </ul>
//         </>
//     );
// };
// [10,20,30].forEach(item => item*10)

// const example = function(){}

export default Nav;