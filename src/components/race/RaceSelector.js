import races from "../../data/races.json"

function RaceSelector() {
  function getRandRace() {
    const randNum = Math.floor(Math.random() * races.length);
    console.log(races[randNum]);
  }

  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h2>Race</h2>
      <button onClick={getRandRace}>Randomize</button>
    </div>
  );
}

export default RaceSelector;
