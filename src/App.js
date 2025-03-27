import { useState } from 'react';
import Counter from './Counter';

function App() {
  // Initial state with three counters
  const [counts, setCounts] = useState([1, 4, 3]);

  // Update a counter by index, limiting the value between 0 and 10
  const updateCount = (index, delta) => {
    const newCounts = [...counts];
    const newValue = newCounts[index] + delta;
    // Only update if within allowed range
    if (newValue >= 0 && newValue <= 10) {
      newCounts[index] = newValue;
      setCounts(newCounts);
    }
  };

  // Reset all counters to 0
  const resetCounts = () => {
    setCounts(counts.map(() => 0));
  };

  // Add a new counter with an initial value of 0
  const addCounter = () => {
    setCounts([...counts, 0]);
  };

  // Remove a counter by its index
  const removeCounter = (index) => {
    setCounts(counts.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      {/* Display the total count */}
      <h1>Total Count: {counts.reduce((total, num) => total + num, 0)}</h1>
      {counts.map((value, index) => (
        <Counter
          key={index}
          label={`Counter ${index + 1}`}
          value={value}
          increment={() => updateCount(index, 1)}
          decrement={() => updateCount(index, -1)}
          removeCounter={() => removeCounter(index)}
        />
      ))}
      {/* Buttons for resetting and adding counters */}
      <button onClick={resetCounts}>Reset</button>
      <button onClick={addCounter}>➕ Add Counter</button>
    </div>
  );
}

export default App;