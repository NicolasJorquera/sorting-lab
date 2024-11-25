import React, { useState } from "react";

interface Props {
  onRun: (algorithm: string, array: number[]) => void;
}

const AlgorithmSelector: React.FC<Props> = ({ onRun }) => {
  const [algorithm, setAlgorithm] = useState<string>("bubble_sort");
  const [array, setArray] = useState<string>("64,34,25,12,22,11,90");

  const handleRun = () => {
    const parsedArray = array.split(",").map(Number);
    onRun(algorithm, parsedArray);
  };

  return (
    <div>
      <label>
        Select Algorithm:
        <select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
          <option value="bubble_sort">Bubble Sort</option>
          <option value="quick_sort">Quick Sort</option>
          <option value="merge_sort">Merge Sort</option>
        </select>
      </label>
      <br />
      <label>
        Input Array:
        <input
          type="text"
          value={array}
          onChange={(e) => setArray(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleRun}>Run</button>
    </div>
  );
};

export default AlgorithmSelector;
