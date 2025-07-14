import { useReducer, useRef } from "react";

type State = {
  count: number;
  count2: number;
};

type ActionArgs =
  | {
      type:
        | "tambah-pertama"
        | "kurang-pertama"
        | "tambah-kedua"
        | "kurang-kedua";
    }
  | {
      type: "tambah-bebas";
      nomor: 1 | 2;
      total: number;
    };

const reducerFunction = (state: State, action: ActionArgs) => {
  switch (action.type) {
    case "tambah-pertama":
      return { ...state, count: state.count + 1 };
    case "kurang-pertama":
      return { ...state, count: state.count - 1 };
    case "tambah-kedua":
      return { ...state, count2: state.count2 + 1 };
    case "kurang-kedua":
      return { ...state, count2: state.count2 - 1 };
    case "tambah-bebas":
      return {
        ...state,
        ...(action.nomor === 1
          ? { count: state.count + action.total }
          : { count2: state.count2 + action.total }),
      };
    default:
      return state;
  }
};

const initialValue = { count: 0, count2: 0 };

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialValue);
  const nomorRef = useRef<null | HTMLSelectElement>(null);
  const totalRef = useRef<null | HTMLInputElement>(null);

  const tambahBebas = () => {
    dispatch({
      type: "tambah-bebas",
      nomor: Number(nomorRef.current?.value) as 1 | 2,
      total: Number(totalRef.current?.value),
    });
  };

  return (
    <div>
      <h1>useReducer</h1>
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
      <div>
        <h1>Count1 : {state.count}</h1>
        <button onClick={() => dispatch({ type: "tambah-pertama" })}>
          Tambah Pertama
        </button>
        <button onClick={() => dispatch({ type: "kurang-pertama" })}>
          Kurang Pertama
        </button>
      </div>
      <div>
        <h1>Count2 : {state.count2}</h1>
        <button onClick={() => dispatch({ type: "tambah-kedua" })}>
          Tambah Kedua
        </button>
        <button onClick={() => dispatch({ type: "kurang-kedua" })}>
          Kurang Kedua
        </button>
      </div>
    </div>
  );
};
