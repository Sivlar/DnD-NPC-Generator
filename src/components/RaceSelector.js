import races from "../data/races.json"
import { useState } from 'react';

function RaceSelector() {
  const [randNum, setrandNum] = useState(-1);

  function getRandRace() {
    const randNum = Math.floor(Math.random() * races.length);
    setrandNum(randNum);
  }

  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h2>Race</h2>
      <button onClick={getRandRace}>Randomize</button>
      {randNum >= 0 ? <div>{(races[randNum])}</div> : null}
    </div>
  );
}

export default RaceSelector;
