import { useState } from 'react';

function GenderSelector() {
  const [gender, setGender] = useState("Either");

  return (
    <>
      {/* <hr /> */}

      <div className="card"><h2>Gender</h2></div>
      <div>
        <input type="radio" id="either" name="gender" value="Either" checked></input>
        <label htmlFor="either">Either</label>
      </div>
      <div>
        <input type="radio" id="male" name="gender" value="Male"></input>
        <label htmlFor="male">Male</label>
      </div>
      <div>
        <input type="radio" id="female" name="gender" value="Female"></input>
        <label htmlFor="female">Female</label>
      </div>

      {/* <br /><hr />

      <form>
        <h2>Gender</h2>
        <div>
          <input type="radio" name="gender" /> Either
        </div>
        <div>
          <input type="radio" name="gender" /> Male
        </div>
        <div>
          <input type="radio" name="gender" /> Female
        </div>
      </form>

      <br /><hr /> */}
    </>
  );
}

export default GenderSelector;