import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-fit bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500">Contact.</p>
        </div>
          <p className="my-5">Submit the form below to get in touch with me!</p>

        <div className="flex justify-center items-center py-8">
            <form action="" className="flex flex-col w-full md:w-1/2">
                <input type="text" name="name" placeholder="What's your name?" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                <input type="text" name="email" placeholder="What's your email?" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <textarea name="message" rows="10" placeholder="What do you want to say?" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's talk!</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
