const Planet = (props) => {
  return ( 
    <div className="planet">
      <h3 key={props.key}>{props.isGasPlanet && props.name}</h3>
    </div>
  );
}
 
export default Planet;