import { useEffect, useRef, useState } from "react";

export const UseRef = () => {
  const [count, setCount] = useState(1);
  const text = useRef<null | HTMLInputElement>(null);
  const countRef = useRef(1);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const incrementRef = () => {
    countRef.current = countRef.current + 1;
  };

  const checkValue = () => {
    const doc = document.getElementById("text-input") as HTMLInputElement;
    console.log(doc?.value);
    console.log(text.current?.value);
  };

  console.log("re-render");

  useEffect(() => {
    console.log(buttonRef?.current);
  }, []);

  return (
    <div>
      <div>
        <p>Count State : {count}</p>
        <button onClick={increment} ref={buttonRef}>
          Increment State
        </button>
      </div>
      <div>
        <p>Count Ref : {countRef.current}</p>
        <button onClick={incrementRef}>Increment Ref</button>
      </div>
      <div>
        <input id={"text-input"} defaultValue={"test"} ref={text} />
        <button onClick={checkValue}>Submit</button>
      </div>
    </div>
  );
};
