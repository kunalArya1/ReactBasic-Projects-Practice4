import React from "react";
import { useState } from "react";

const itemList = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Carrot", category: "Vegetable" },
  { id: 3, name: "Banana", category: "Fruit" },
  { id: 4, name: "Broccoli", category: "Vegetable" },
];
const Items = () => {
  const [category, setcategory] = useState(itemList);

  const fruitList = () => {
    const fruitList = itemList.filter((item) => item.category == "Fruit");
    setcategory(fruitList);
  };

  const VegetableList = () => {
    const vegetableList = itemList.filter(
      (item) => item.category == "Vegetable"
    );
    setcategory(vegetableList);
  };
  return (
    <div className=" text-center">
      <h1 className=" font-bold text-xl m-5">Grocery App</h1>
      <div>
        <button
          onClick={() => setcategory(itemList)}
          className="px-20 py-3 bg-slate-300 m-1 rounded-md font-bold    "
        >
          All
        </button>
        <button
          onClick={() => fruitList()}
          className="px-20 py-3 bg-slate-300 m-1 rounded-md font-bold    "
        >
          Fruits
        </button>
        <button
          onClick={() => VegetableList()}
          className="px-20 py-3 bg-slate-300 m-1 rounded-md font-bold    "
        >
          Vegetables
        </button>
      </div>

      <div className="p-4 mt-20 ">
        {category.map((item) => (
          <div
            key={item.id}
            className=" bg-slate-300 m-3 p-4 w-1/2 mx-auto rounded-md font-semibold text-xl"
          >
            <h1
              style={{ color: item.category == "Fruit" ? "orange" : "green" }}
            >
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
