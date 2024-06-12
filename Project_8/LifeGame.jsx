import React from "react";
import { useState } from "react";

const LifeGame = () => {
  const [Life, setLife] = useState(4);

  return (
    <div className=" text-center">
      <h1 className=" font-bold text-6xl p-5 mb-10 ">LifeGame App</h1>
      {Life > 0 ? (
        <div>
          <h1 className=" text-5xl font-bold  bg-slate-500 w-fit mx-auto p-7 rounded-md mb-10">
            Current Live : {Life}
          </h1>
          <button
            onClick={() => setLife(Life - 1)}
            className=" bg-red-700 p-4 rounded-lg m-4 font-bold text-white"
          >
            Lose a Life
          </button>
        </div>
      ) : (
        <div className=" font-bold text-2xl text-red-600">Game Over</div>
      )}
    </div>
  );
};

export default LifeGame;
