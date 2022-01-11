import { useState } from 'react';
import GenderSelector from './components/gender/GenderSelector';
import RaceSelector from './components/race/RaceSelector';
import AgeSelector from './components/age/AgeSelector';

function App() {
  const [state, setstate] = useState(false)

  return (
    <div>
      <div className='title'>
        <h1>DnD NPC Generator</h1>
      </div>
      <GenderSelector />
      <RaceSelector />
      <AgeSelector />
    </div>
  );
}

export default App;
