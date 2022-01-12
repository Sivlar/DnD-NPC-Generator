// 1. Set up the component just like RaceSelector
// 2. Find out what the Gender is, if anything
//      * If "Male", use male first names
//      * Else If "Female", use female first names
//      * Else, use a combination of both lists
// 3. Generate a random last name
// 4. Combine and print firstName and lastName

// https://stackoverflow.com/questions/61836485/passing-data-to-sibling-components-with-react-hooks
import names from "../data/names.json"
import GenderSelector from "./GenderSelector"
import { useState } from "react"
function NameSelector () {
    const [randName, setrandName] = useState(0);
    
    function getRandName () {
        const randName = Math.floor(Math.random() * names.length); 
        setrandName(randName);
    }
    return (
        <div style={{ backgroundColor: "orange" }}>
          <h2>Name</h2>
          <button onClick={getRandName}>Randomize</button>
          {randName > 0 ? <div>{(names[randName])}</div> : null}
        </div>
        )

    }

