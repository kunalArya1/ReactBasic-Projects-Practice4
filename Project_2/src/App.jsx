import React from "react";
import { useState } from "react";

const App = () => {
  const [fontSize, setfontSize] = useState(18);
  return (
    <div className=" text-center">
      <h1
        style={{ fontSize: `${fontSize}px` }}
        className={`font-bold  text-center m-8`}
      >
        Welcome
      </h1>
      <button
        onClick={() => setfontSize(fontSize + 1)}
        className=" py-2 px-4 font-bold text-xl rounded-md bg-slate-300 m-2"
      >
        +
      </button>
      <button
        onClick={() => setfontSize(fontSize - 1)}
        className="py-2 px-4 font-bold text-xl rounded-md bg-slate-300 m-2"
      >
        -
      </button>
    </div>
  );
};

export default App;
