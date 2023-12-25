import React from 'react';

function Header(props){
    console.log(props);
    return <h1>Hello there {props.name} indeed {props.color} from Header</h1>;
}
export default Header;