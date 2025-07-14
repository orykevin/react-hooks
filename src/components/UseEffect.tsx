import { useEffect, useState } from "react";

export const UseEffect = () => {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    console.log(count);
  });

  return (
    <div>
      <h1>useEffects</h1>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        <p>Count : {count}</p>
      </div>
      <div>
        <button onClick={() => setCount2((prev) => prev + 1)}>Increment</button>
        <p>Count2 : {count2}</p>
      </div>
    </div>
  );
};
