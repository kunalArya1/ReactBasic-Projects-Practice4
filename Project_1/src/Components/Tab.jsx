import React, { useState } from "react";
import { characters } from "../utils/data";

/**
 
1. Given an array of characters, build a Tab component in React that shows the name of characters on click of two buttons, one for heroes and other for villains. On click of “Show Heroes” button, a list of heroes should be displayed and on click of “Show Villains” button, a list of villains should be displayed on the DOM. Use useState Hook.
 */
const Tab = () => {
  const [showsHeros, setshowsHeros] = useState(true);
  const characterList = showsHeros ? characters.heroes : characters.villains;
  return (
    <div className=" text-center p-4">
      <h1 className=" font-bold text-xl p-4">Heros And Villains Tab App</h1>
      <div>
        <button
          onClick={() => setshowsHeros(true)}
          className=" font-bold px-14 py-3 bg-slate-300 m-2 rounded-md"
        >
          Heros
        </button>
        <button
          onClick={() => setshowsHeros(false)}
          className=" font-bold px-14 py-3 bg-slate-300 m-2 rounded-md"
        >
          Villains
        </button>
      </div>

      <div className=" mt-20">
        {characterList.map((character) => (
          <div
            key={character.name}
            className=" bg-slate-400 m-5 p-5 rounded-md"
          >
            <h1 className=" font-bold">{character.name}</h1>
            <h1>Powers : {character.powers}</h1>
            <h1>Costume : {character.costume}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
