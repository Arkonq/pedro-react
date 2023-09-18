import { useState } from 'react';
import './App.css';

function App() {
  const age = 11;
  const [isGreen, setIsGreen] = useState(true);
  // comment

  return (
  <div className="App">
    {age >= 18 ? <h2>Over Age</h2> : <h2>Under Age</h2>}
    <h1 style={{color: isGreen ? "green" : "red"}}>It is Green</h1>

    <button onClick={() => {setIsGreen(!isGreen)}}>Change color</button>
  </div>
  );
}

export default App;