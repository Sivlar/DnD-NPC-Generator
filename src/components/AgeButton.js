import React from "react";


function AgeButton() {
    function AgeRandom() {
        const agerand = Math.floor(Math.random() * 101);
        console.log([agerand]);
    }

    return (
        <button onClick={AgeRandom}>Randomize</button>
    );
}

export default AgeButton;