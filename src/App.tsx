import React, { useState, useEffect } from "react";
import AlgorithmSelector from "./components/AlgorithmSelector";
import Visualization from "./components/Visualization";
import { PyodideInstance } from "./types";

const App: React.FC = () => {
  const [pyodide, setPyodide] = useState<PyodideInstance | null>(null);
  const [output, setOutput] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadPyodide = async () => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/pyodide/v0.23.2/full/pyodide.js";
      script.onload = async () => {
        const pyodideInstance = await window.loadPyodide();
        setPyodide(pyodideInstance);
      };
      document.body.appendChild(script);
    };
    loadPyodide();
  }, []);

  const runAlgorithm = async (algorithm: string, array: number[]) => {
    if (!pyodide) return;
    setLoading(true);
    setOutput([]);
    try {
      const response = await fetch(`public/algorithms/${algorithm}.py`);
      const pythonCode = await response.text();
      const runPythonCode = `${pythonCode}
result = ${algorithm}(${JSON.stringify(array)})
      `
      pyodide.runPython(runPythonCode);
      const result = pyodide.globals.get("result").toJs();
      setOutput(result);
    } catch (error) {
      console.error("Error running algorithm:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Sorting Lab</h1>
      <AlgorithmSelector onRun={runAlgorithm} />
      {loading ? <p>Loading...</p> : <Visualization output={output} />}
    </div>
  );
};

export default App;
