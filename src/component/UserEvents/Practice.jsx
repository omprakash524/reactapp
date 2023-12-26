import React from "react";

function HandleClickP(){
    console.log("clicked");
}

function Practice(){
    return (
        <>
        <button onClick={HandleClickP}></button>
        </>
    );
};

export default Practice;