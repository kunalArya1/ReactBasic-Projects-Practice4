import React from "react";
import { useState } from "react";

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
  },
  {
    id: 3,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Classic",
  },
  { id: 4, title: "1984", author: "George Orwell", genre: "Dystopian" },
  {
    id: 5,
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
  },
  {
    id: 6,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Young Adult",
  },
  {
    id: 7,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Young Adult",
  },
];
const Books = () => {
  const [allbooks, setallbooks] = useState(books);
  return (
    <div className=" text-center">
      <h1 className=" font-bold text-3xl p-5">Books List</h1>
      {/** Filter Button */}
      <div className=" border w-[60%] mx-auto border-black rounded-md my-2 mb-9">
        <button
          onClick={() => setallbooks(books)}
          className=" py-4 px-10 font-bold rounded-lg m-2 bg-slate-500 "
        >
          All Genre
        </button>
        <button
          onClick={() =>
            setallbooks(books.filter((book) => book.genre == "Classic"))
          }
          className=" py-4 px-10 font-bold rounded-lg m-2 bg-slate-500 "
        >
          Classics
        </button>
        <button
          onClick={() =>
            setallbooks(books.filter((book) => book.genre == "Dystopian"))
          }
          className=" py-4 px-10 font-bold rounded-lg m-2 bg-slate-500 "
        >
          Dystopian
        </button>
        <button
          onClick={() =>
            setallbooks(books.filter((book) => book.genre == "Young Adult"))
          }
          className=" py-4 px-10 font-bold rounded-lg m-2 bg-slate-500 "
        >
          Young Adult
        </button>
      </div>
      {allbooks.map((book) => (
        <div className=" p-4 w-1/2 mx-auto my-2 rounded-md bg-slate-300">
          <h1 className="text-xl font-bold">Title : {book.title}</h1>
          <h1 className=" font-semibold">Author : {book.author}</h1>
        </div>
      ))}
    </div>
  );
};

export default Books;
