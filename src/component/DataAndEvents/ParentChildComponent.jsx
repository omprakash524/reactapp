import React from "react";

function Dog(){
    return (
        <>
        <Puppy name="Max" bowlShape="Shape" bowlStatus="full"/>
        </>
    );
};

function Puppy(props){
    return(
        <>
        {props.name} has <Bowl bowlShape="Square" bowlStatus="full" />
        </>
    );
};

function Bowl(props){
    return(
        <span>
            {props.bowlShape}- shaped bowl, and it's currently {props.bowlStatus}
        </span>
    );
};