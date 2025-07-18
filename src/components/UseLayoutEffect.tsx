import { useEffect, useLayoutEffect, useState } from "react";

export const UseLayoutEffect = () => {
  const [show, setShow] = useState(false);
  const [size, setSize] = useState(0);

  //change to useLayoutEffect
  useEffect(() => {
    if (show) {
      const width = window.innerWidth;
      setSize(width);
    }
  }, [show]);

  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>Toggle Box</button>
      {show && (
        <div
          style={{
            width: size,
            height: 100,
            background: "lightblue",
            border: "1px solid black",
            transition: "width 0.2s ease",
          }}
        >
          Width: {size}
        </div>
      )}
    </div>
  );
};
