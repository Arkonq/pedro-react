import './App.css';
import User from './User';
import Planet from './Planet';

function App() {
  const names = [
    {name: "Jack", age: 23},
    {name: "Matt", age: 26},
    {name: "Rat", age: 41},
  ];  

  const planets = [
    { name: "Mercury", isGasPlanet: false },
    { name: "Venus", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Mars", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Saturn", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
    { name: "Neptune", isGasPlanet: true },
  ];

  return (
  <div className="App">
    <h2>Names</h2>
    {names.map((user, key) => (
      <User name={user.name} age={user.age} key={key}/>
    ))}  
    <h2>Gas Planets</h2>
    {planets.map((planet, key) => (
      <Planet name = {planet.name} isGasPlanet = {planet.isGasPlanet} key = {key} />
    ))}
    <h2>Not Gas Planets</h2>
    {planets.map((planet, key) => (
      <Planet name = {planet.name} isGasPlanet = {!planet.isGasPlanet} key = {key} />
    ))}
  </div>
  );
}

export default App;