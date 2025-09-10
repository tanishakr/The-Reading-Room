import React from "react";

function Cards({ item, isHomePage }) {
  const cardWidthClass = isHomePage ? "w-80 md:w-96" : "w-full";
  const cardGapClass = isHomePage ? "p-3" : "p-0"; // No padding for course page
  
  return (
    <>
      <div className={`mt-5 my-3 ${cardGapClass}`}>
        <div className={`card ${cardWidthClass} bg-base-100 shadow-xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border`}>
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-4 py-0.5 rounded-full hover:bg-pink-500 duration-200">
                Buy
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;