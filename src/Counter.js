import { useState } from 'react';

function Counter(props) {
  // Initialize count with 0 (or you could use props.value if desired)
  const [count, setCount] = useState(0);

  return (
    <div className="Counter">
      <small>{props.label}</small>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;