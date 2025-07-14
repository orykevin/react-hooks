import { useRef, useState } from "react";

export const UseReducer = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <h1>useReducer</h1>
      <ManualCount setCount={setCount} setCount2={setCount2} />
      <CountComponent
        count={count}
        count2={count2}
        setCount={setCount}
        setCount2={setCount2}
      />
    </div>
  );
};

const ManualCount = ({
  setCount,
  setCount2,
}: {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setCount2: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const nomorRef = useRef<null | HTMLSelectElement>(null);
  const totalRef = useRef<null | HTMLInputElement>(null);

  const tambahBebas = () => {
    if (nomorRef.current && totalRef.current) {
      if (nomorRef.current.value === "1") {
        setCount((prev) => prev + Number(totalRef?.current?.value));
      } else {
        setCount2((prev) => prev + Number(totalRef?.current?.value));
      }
    }
  };

  return (
    <div>
      <label>Nomor</label>
      <select ref={nomorRef}>
        <option value={1}>1</option>
        <option value={2}>2</option>
      </select>
      <label>Total</label>
      <input type="number" ref={totalRef} />
      <button onClick={tambahBebas}>Tambah</button>
    </div>
  );
};

const CountComponent = ({
  count,
  count2,
  setCount,
  setCount2,
}: {
  count: number;
  count2: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setCount2: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <>
      <div>
        <h1>Count1 : {count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>
          Tambah Pertama
        </button>
        <button onClick={() => setCount((prev) => prev - 1)}>
          Kurang Pertama
        </button>
      </div>
      <div>
        <h1>Count2 : {count2}</h1>
        <button onClick={() => setCount2((prev) => prev + 1)}>
          Tambah Kedua
        </button>
        <button onClick={() => setCount2((prev) => prev - 1)}>
          Kurang Kedua
        </button>
      </div>
    </>
  );
};
