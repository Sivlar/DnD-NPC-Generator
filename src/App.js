import { useState } from 'react';
import GenderSelector from './components/GenderSelector';
import RaceSelector from './components/RaceSelector';
import AgeSelector from './components/AgeSelector';

function App() {
  return (
    <div>
      <div className='title'>
        <h1>DnD NPC Generator</h1>
      </div>
      <GenderSelector />
      {/* <NameGenerator /> */}
      <RaceSelector />
      <AgeSelector />
    </div>
  );
}

export default App;
