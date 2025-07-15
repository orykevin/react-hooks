import { useState } from "react";

import "./App.css";
import { UseState } from "./components/UseState";
import { UseEffect } from "./components/UseEffect";
import { UseRef } from "./components/UseRef";
import { UseMemo } from "./components/UseMemo";
import { UseCallback } from "./components/UseCallback";
import { UseReducer } from "./components/UseReducer";
import UseContext from "./components/UseContext";

const RenderMode = (mode: string) => {
  switch (mode) {
    case "use-state":
      return <UseState />;
    case "use-effect":
      return <UseEffect />;
    case "use-ref":
      return <UseRef />;
    case "use-memo":
      return <UseMemo />;
    case "use-callback":
      return <UseCallback />;
    case "use-reducer":
      return <UseReducer />;
    case "use-context":
      return <UseContext />;
  }
};

const modes = [
  { value: "use-state", label: "useState" },
  { value: "use-effect", label: "useEffect" },
  { value: "use-ref", label: "useRef" },
  { value: "use-memo", label: "useMemo" },
  { value: "use-callback", label: "useCallback" },
  { value: "use-reducer", label: "useReducer" },
  { value: "use-context", label: "useContext" },
];

function App() {
  const [mode, setMode] = useState<string | null>(null);

  return (
    <>
      <label>Select Hooks : </label>
      <select
        className="select"
        onChange={(e) => setMode(e.target.value)}
        defaultValue={""}
      >
        <option value="">Select Mode</option>
        {modes.map((mode) => (
          <option key={mode.value} value={mode.value}>
            {mode.label}
          </option>
        ))}
      </select>
      {mode ? RenderMode(mode) : <h1>Select Mode</h1>}
    </>
  );
}

export default App;
