import React from "react";
import Cards from "./Cards";
import list from "../data/list.json";
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-25 px-5 py-2">
        <div className="mt-30 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            Heading lagani hai koi
            <span className="text-green-500">diff color</span>
          </h1>
          <p className="mt-10">
            Yes, that is correct; mitochondria (plural of mitochondrion) are known as the "powerhouse of the cell" because they generate most of the cell's energy in the form of adenosine triphosphate (ATP) through the process of cellular respiration. This ATP serves as the chemical energy currency that powers various cellular activities and functions essential for life.
          </p>
          <Link to="/">
          <button className="bg-purple-600 text-white px-5 py-3 rounded-md hover:bg-orange-600 duration-300 mt-7">
            Back
          </button>
          </Link>
        </div>
        {/*
          - On small screens (`sm`), you'll have 2 cards.
          - On medium screens (`md`), you'll now have 3 cards per row.
          - On large screens (`lg`), you'll revert to 4 cards.
          This gives you granular control over the layout.
        */}
        <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;