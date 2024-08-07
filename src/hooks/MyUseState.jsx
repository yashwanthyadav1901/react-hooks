import React, { useState } from "react";

function countInitial() {
  console.log("run");
  return 4;
}

const MyUseState = () => {
  const [count, setCount] = useState(countInitial);

  return (
    <>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        -
      </button>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        +
      </button>
    </>
  );
};

export default MyUseState;
