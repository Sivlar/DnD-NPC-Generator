import { render } from "@testing-library/react";
import React from "react";
import gender from "../data/gender.json"
render() 
function RaceButton() {
    function randrace() {
        const rrand = Math.floor(Math.random() * gender.length);
        console.log(gender[rrand]); 
    }
   
    return (<button onClick= {randrace}>Randomize</button>);
    <div className="containerBox"> {randrace.useDebugValue(value)} </div>
    

}
export default RaceButton;