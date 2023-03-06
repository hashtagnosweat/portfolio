import React from "react";
import HeroImage from "../assets/heroImage.png";
import {Link} from "react-scroll"
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">

        <div className="hidden md:flex flex-col justify-center items-center mt-12">
          <div className="w-5 h-5 rounded-full bg-blue-700" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-blue-700 to-transparent" />
        </div>

        <div className="flex flex-col justify-center h-full mr-10">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hello, I'm <span className="text-blue-500">Rido!</span>
          </h2>

          <p className="text-2xl text-gray-500 py-4 max-w-md">
             I am a software developer based in Jakarta, Indonesia. I develop user interfaces and web applications.
          </p>

          <div>
            <button className="group hidden text-white w-fit px-6 py-2 my-2 lg:flex items-center rounded-md bg-gradient-to-l from-cyan-500 to-blue-500 cursor-pointer">
            <Link to="about" smooth duration={500}>Get to know me!</Link>
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={18}/>
              </span>
            </button>
          </div>
        </div>

        <div className="hidden sm:flex">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-1/2 md:w-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
