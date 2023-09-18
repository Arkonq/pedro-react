import { useState } from 'react';
import './App.css';

function App() {  
  const [display, setDisplay] = useState(true);
  const [count, setCount] = useState(0);

  return (
  <div className="App">
    <h2 style={{color: display ? "red" : "green"}}>Spoiler text</h2>
    <button onClick={() => {setDisplay(!display)}}>Show/Hide</button>
    <h2>Counter App</h2>
    <p>Num is {count}</p>    
    <button onClick={() => {setCount(count + 1)}}>Increase</button>
    <button onClick={() => {setCount(count - 1)}}>Decrease</button>
    <button onClick={() => {setCount(0)}}>Set to Zero</button>
  </div>
  );
}

export default App;