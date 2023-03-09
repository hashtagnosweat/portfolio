import React from "react";
import HeroImage from "../assets/heroImage.png";


const About = () => {
  return (
    <div name="about" className="w-full h-fit sm:h-screen bg-gradient-to-b from-gray-800 to-black text-gray-400">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-gray-400 text-white">Overview.</p>
        </div>

        <div className="sm:hidden w-full">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-1/2 md:w-80"
          />
        </div>

        <p className="text-l mt-5">
        Hi, my name is Rido Rachmatan! I have just completed my undergraduate studies with a major in information systems, my goal is to provide the best quality of work to achieve a certain objective on time with excellence. I have hands-on experience in JavaScript, Node JS, Express JS, Mongo DB, and React JS and have been honing my web development and software testing abilities for the past three years.



        </p>

        <br />

        <p className="text-l">
        I am capable and passionate of continuous learning from senior developers with a desire to apply skills to a talented engineering team to develop quality solutions. Let's work together to bring your ideas to life!
        </p>
      </div>
    </div>
  );
};

export default About;
