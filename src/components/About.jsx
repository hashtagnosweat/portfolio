import React from "react";
import HeroImage from "../assets/heroImage.png";


const About = () => {
  return (
    <div name="about" className="w-full h-fit sm:h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500">Overview.</p>
        </div>

        <div className="sm:hidden w-full">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-1/2 md:w-80"
          />
        </div>

        <p className="text-xl mt-5">
        I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          sunt, sapiente atque suscipit et nesciunt quas provident quam tempora
          voluptatem deleniti fugit aliquid. Temporibus, magni tempora
          accusantium harum perferendis aliquid!
        </p>
      </div>
    </div>
  );
};

export default About;
