import { useState } from 'react';
import Counter from './Counter';

function App() {
  // Initialize counts for three counters
  const [counts, setCounts] = useState([1, 4, 3]);

  // Function to update count for a specific counter
  const updateCount = (index, delta) => {
    const newCounts = [...counts]; // Copy array to maintain immutability
    newCounts[index] += delta;
    setCounts(newCounts);
  };

  return (
    <div className="App">
      {counts.map((value, index) => (
        <Counter
          key={index}
          label={`Counter ${index + 1}`}
          value={value}
          // Passing callback functions to modify the state in the parent
          increment={() => updateCount(index, 1)}
          decrement={() => updateCount(index, -1)}
        />
      ))}
      {/* Stretch Challenge: Display total count */}
      <h1>Total Count: {counts.reduce((total, num) => total + num, 0)}</h1>
    </div>
  );
}

export default App;