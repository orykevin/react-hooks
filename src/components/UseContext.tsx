import { useState } from "react";

const UseContext = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <h1>useContext</h1>
        <div>
          <p>Count : {count}</p>
          <button onClick={() => setCount((prev) => prev + 1)}>
            Increment
          </button>
        </div>
      </div>
      <ComponentParent count={count} setCount={setCount} />
    </div>
  );
};

const ComponentParent = ({
  count,
  setCount,
}: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="card">
      <p>Parent</p>
      <ComponentChildren count={count} setCount={setCount} />
    </div>
  );
};

const ComponentChildren = ({
  count,
  setCount,
}: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="card">
      <p>Children</p>
      <ComponentGrandChildren count={count} setCount={setCount} />
    </div>
  );
};

const ComponentGrandChildren = ({
  count,
  setCount,
}: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="card">
      <p>Grand Children</p>
      <p>Count : {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default UseContext;
