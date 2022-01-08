import { useState } from 'react';
import GenderSelector from './components/GenderSelector';
import AgeSelector from './components/AgeSelector';
import RandomButton from './components/RandomButton';

function App() {
  const [state, setstate] = useState(false)

  return (
    <div>
      <div className='title'>
        <h1>DnD NPC Generator</h1>
      </div>
      <GenderSelector />
      <h2>Race</h2>
      <RandomButton />
      <AgeSelector />
    </div>
  );
}

export default App;
