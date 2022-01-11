import { useState } from 'react';

function GenderSelector() {
  const [gender, setGender] = useState("");

  function getGender() {
    const randNum = Math.floor(Math.random() * 2);
    const chosenGend = ["Male", "Female"][randNum];
    console.log(chosenGend);
    setGender(chosenGend);
  }

  return (
    <div style={{ backgroundColor: "green" }}>
      <h2>Gender</h2>
      <button onClick={getGender}>Randomize</button>
      {gender !== "" ? <div>{gender}</div> : null}

      {/* <div className="card"><h2>Gender</h2></div>
      <div>
        <input type="radio" id="either" name="gender" value="Either"></input>
        <label htmlFor="either">Either</label>
      </div>
      <div>
        <input type="radio" id="male" name="gender" value="Male"></input>
        <label htmlFor="male">Male</label>
      </div>
      <div>
        <input type="radio" id="female" name="gender" value="Female"></input>
        <label htmlFor="female">Female</label>
      </div> */}
    </div>
  );
}

export default GenderSelector;