import { createContext, useContext, useState } from "react";

type CountContext = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export const CountContext = createContext<CountContext>({
  count: 0,
  setCount: () => {},
});

const UseContext = () => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <div>
        <h1>useContext</h1>
        <div>
          <p>Count : {count}</p>
          <button onClick={() => setCount((prev) => prev + 1)}>
            Increment
          </button>
        </div>
      </div>
      <ComponentParent />
    </CountContext.Provider>
  );
};

const ComponentParent = () => {
  return (
    <div className="card">
      <p>Parent</p>
      <ComponentChildren />
    </div>
  );
};

const ComponentChildren = () => {
  return (
    <div className="card">
      <p>Children</p>
      <ComponentGrandChildren />
    </div>
  );
};

const ComponentGrandChildren = () => {
  const { count, setCount } = useContext(CountContext);
  return (
    <div className="card">
      <p>Grand Children</p>
      <p>Count : {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default UseContext;
