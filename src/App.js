import { useState } from 'react';
import GenderSelector from './components/GenderSelector';
import RaceSelector from './components/RaceSelector';
import AgeSelector from './components/AgeSelector';
import NameSelector from './components/NameSelector'


function App() {
  const [gender, setGender] = useState("");

  return (
    <div>
      <div className='title'>
        <h1>DnD NPC Generator</h1>
      </div>
      <AgeSelector />
      <RaceSelector />
      <GenderSelector setGender={setGender} gender={gender} />
      <NameSelector gender={gender} />
    </div>
  );
}

export default App;
