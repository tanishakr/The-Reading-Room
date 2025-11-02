import React from "react";

function Hero() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-25 px-5 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mt-15 md:mt-30 md:order-1 order-2 ">
          <div className="space-y-15">
            <h1 className="text-4xl font-bold">
              Read, Learn, <span className="text-purple-500">And Grow</span>
            </h1>
            <p className="text-xl">
              Welcome to The Reading Room, your new home for digital books and online courses. We offer a vast library of free public domain classics and premium modern titles. Log in to see your collection or sign up to get started!
            </p>

            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" 
              id = "email"
              name = "email"
              placeholder="mail@site.com" required 
              autoComplete="email" />
              
            </label>
            
          </div>
          <button className="btn mt-5 btn-secondary">Secondary</button>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2">
        <img src="/Hero-pic.jpg" className="w-100 h-100 md:w-150 md:h-130 mt-7"></img>
        </div>
      </div>
    </>
  );
}

export default Hero;
