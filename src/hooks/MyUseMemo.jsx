import React, { useMemo, useState } from "react";

function slowFunction(num) {
  console.log("running function");
  for (let i = 0; i < 100000000; i++) return num * 2;
}

const MyUseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => parseInt(setNumber(e.target.value))}
      />

      <button onClick={() => setDark((prev) => !prev)}>change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
};

export default MyUseMemo;
