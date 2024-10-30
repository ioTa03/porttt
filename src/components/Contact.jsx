import React from "react";
import Html1 from "../assets/ra.svg"
const Contact = () => {
  return (
    <div name="contact" className="w-full  h-screen bg-gradient-to-b from-black to-black p-4 text-white ">
      <div className="flex flex-col justify-center max-w-screen-lg mx-20 h-full">
        <div className="pb-8 mt-28 sm:mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-pink-700 hover:text-pink-200">
            Contact
          </p>
          <p className="py-6 text-pink-200">If you wish to mail me, don't hesitate. Just type it already!</p>
        </div>

        <div className=" flex ">
          <form action="https://getform.io/f/946cdce5-d03a-4690-9875-f99e097e8727" method="POST" className=" flex flex-col w-full md:w-1/2" >
            <input type="text" placeholder="Namesake"  className="p-2 bg-transparent border-2 border-pink-400 rounded-md hover:border-red-600 text-pink-200 focus:outline-none" />
            <input type="text"placeholder="Email" className="my-4 p-2 bg-transparent border-2 border-pink-400 rounded-md hover:border-red-600 text-pink-200 focus:outline-none"/>
            <textarea name="message" placeholder="Speak your mind" rows="10" className="p-2 bg-transparent border-2 border-pink-400 rounded-md hover:border-red-600 text-pink-200 focus:outline-none" ></textarea>
            <div>
            <button smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-pink-500 to-red-700 cursor-pointer">
              Send
              <span className="group-hover:rotate-180 duration-300">
                <img src={Html1} alt="" className="src w-4 mx-3" />
              </span>
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
