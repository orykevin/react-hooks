import { useState } from "react";

import "./App.css";
import { UseState } from "./components/UseState";

const RenderMode = (mode: string) => {
  switch (mode) {
    case "use-state":
      return <UseState />;
  }
};

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
        <option value="use-state">useState</option>
      </select>
      {mode ? RenderMode(mode) : <h1>Select Mode</h1>}
    </>
  );
}

export default App;
