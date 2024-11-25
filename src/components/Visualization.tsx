import React from "react";

interface Props {
  output: number[];
}

const Visualization: React.FC<Props> = ({ output }) => {
  return (
    <div>
      <h2>Steps:</h2>
      {output.map((step, index) => (
        <p key={index}>{step}</p>
      ))}
    </div>
  );
};

export default Visualization;
