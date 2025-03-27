function Counter(props) {
    return (
      <div className="Counter">
        <small>{props.label}</small>
        <h1>{props.value}</h1>
        <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button>
        {/* Button to remove this counter */}
        <button onClick={props.removeCounter}>Remove Counter</button>
      </div>
    );
  }
  
export default Counter;