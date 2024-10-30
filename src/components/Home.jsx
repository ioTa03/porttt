import React from "react";
import Html from "../assets/kk12.jpg";
// import Html1 from "../assets/ra.svg";
// import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: `url(${Html})` }}>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            welcome world
          </h2>
          <p className="text-pink-500 font-mono text-lg py-4 max-w-md ">
            Easier said than done. Explore and judge
          </p>

          
        </div>
      </div>
    </div>
  );
};


export default Home;


 