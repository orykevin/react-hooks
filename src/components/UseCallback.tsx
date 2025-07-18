import { memo, useCallback, useState } from "react";

export const UseCallback = () => {
  const [todo, setTodo] = useState<string[]>([]);
  const [input, setInput] = useState("");

  //   const deleteTodo = (index: number) => {
  //     setTodo((prev) => prev.filter((_, i) => i !== index));
  //   };

  const deleteTodoMemo = useCallback(
    (index: number) => {
      setTodo((prev) => prev.filter((_, i) => i !== index));
    },
    [todo]
  );

  return (
    <div>
      <h1>useCallback</h1>
      <div>
        <label>Input Todo</label>
        <input onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => setTodo((prev) => [...prev, input])}>
          Submit
        </button>
      </div>
      <div>
        {todo.map((item, index) => (
          <Todo
            key={index}
            todo={item}
            index={index}
            deleteFunction={deleteTodoMemo}
          />
        ))}
      </div>
    </div>
  );
};

const Todo = memo(
  ({
    todo,
    deleteFunction,
    index,
  }: {
    todo: string;
    index: number;
    deleteFunction: (index: number) => void;
  }) => {
    console.log("re-render todo");
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 360,
          margin: "8px",
          padding: "4px 12px",
          border: "1px solid",
        }}
      >
        {todo} <button onClick={() => deleteFunction(index)}>delete</button>
      </div>
    );
  }
);
