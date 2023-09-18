const user = (props) => {
  return ( 
    <div className="user">
      <h3 key={props.key}>Name: {props.name} Age: {props.age}</h3>
    </div>
   );
}
 
export default user;