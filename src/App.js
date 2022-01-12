import { useState } from 'react';
import GenderSelector from './components/GenderSelector';
import RaceSelector from './components/RaceSelector';
import AgeSelector from './components/AgeSelector';
import NameSelector from './components/NameSelector'


function App() {
  const [name, setName] = useState("")

  return (
    <div>
      <div className='title'>
        <h1>DnD NPC Generator</h1>
      </div>
      <GenderSelector />
      {/* <NameGenerator /> */}
      <RaceSelector />
      <AgeSelector />
      <GenderSelector setName={setName} / >
      <NameSelector name= {name} / >
    </div>
  );
}
const NameSelector = ({name}) => {
  
}

const GenderSelector = ({setName}) => {
  
}

export default App;
