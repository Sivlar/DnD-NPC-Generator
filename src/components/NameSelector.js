import names from "../data/names.json"
import { useState } from "react"

function NameSelector(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  function getRandName() {
    let randName = "";

    if (props.gender === "Male") {
      const randNum = Math.floor(Math.random() * names.firstNames.maleNames.length)
      randName = names.firstNames.maleNames[randNum];
    }
    else if (props.gender === "Female") {
      const randNum = Math.floor(Math.random() * names.firstNames.femaleNames.length)
      randName = names.firstNames.femaleNames[randNum];
    }
    else {
      const eitherNameList = names.firstNames.maleNames.concat(names.firstNames.femaleNames);
      const randNum = Math.floor(Math.random() * eitherNameList.length)
      randName = eitherNameList[randNum];
    }

    setFirstName(randName);

    const randNum = Math.floor(Math.random() * names.lastNames.length);
    setLastName(names.lastNames[randNum]);

    setFullName(firstName + " " + lastName);
  }

  return (
    <div style={{ backgroundColor: "orange" }}>
      <h2>{props.gender !== "" ? props.gender + " " : null}Name</h2>
      <button onClick={getRandName}>Randomize</button>
      {fullName !== "" ? <div>{fullName}</div> : null}
    </div>
  );
}

export default NameSelector;