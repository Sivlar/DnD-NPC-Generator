import { useState } from 'react';

function AgeSelector() {
  const [randAge, setRandAge] = useState(0);

  function getRandAge() {
    const randAge = Math.floor(Math.random() * 101);
    setRandAge(randAge);
  }

  return (
    <div style={{ backgroundColor: "blue" }}>
      <h2>Age</h2>
      <button onClick={getRandAge}>Randomize</button>
      {randAge > 0 ? <div>{randAge}</div> : null}
    </div>
  );
}

export default AgeSelector;