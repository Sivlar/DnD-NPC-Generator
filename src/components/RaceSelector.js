import races from "../data/races.json"
import { useState } from 'react';

function RaceSelector() {
  const [randNum, setrandNum] = useState(0);

  function getRandRace() {
    const randNum = Math.floor(Math.random() * races.length);
    setrandNum(randNum);
  }

  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h2>Race</h2>
      <button onClick={getRandRace}>Randomize</button>
      {randNum > 0 ? <div>{(races[randNum])}</div> : null}
      {/* Frank, sometimes the randNum == 0 and it hides the result when instead it should display the word "Dwarf". randNum > 0 should be changed to something else. */}
    </div>
  );
}

export default RaceSelector;
