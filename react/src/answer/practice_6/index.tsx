import { useState } from 'react';

export const Answer6 = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount((prevCount) => prevCount + 1);
  const decrease = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
