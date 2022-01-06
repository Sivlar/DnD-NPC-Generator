import { useState } from 'react';
function App() {
  const [state, setstate ] = useState(false)
  return (
    
<div>
     
     <div className= 'title'><h1>DnD NPC Generator</h1> </div>
     <div className= 'card'> <h2> Gender </h2> 
      <button className= 'btn'> Male </button>
      <button className= 'btn'> Female </button>
    <h3> Race </h3>
    <h4> Age </h4>
    <div class= 'slidecontainer'><input type= 'range' min= '16' max= '100'
    value= '50' class ='slider' id= 'Age'></input></div>
  
    </div>
   </div>
  );
}
export default App;

