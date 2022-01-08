import React from "react";
import races from "../data/races.json"

function RandomButton() {
    function handleRandom() {
        const rand = Math.floor(Math.random() * races.length);
        console.log(races[rand]);
    }

    return (
        <button onClick={handleRandom}>Randomize</button>
    );
}

export default RandomButton;