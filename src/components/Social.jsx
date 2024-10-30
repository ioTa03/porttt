import React from "react";
import { FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { SiLeetcode } from "react-icons/si";

const Social= () => {
  return (
    <div className="hidden md:flex flex-col top-[30%] left-[1%] z-[1000] fixed">
      <ul>
      <li className="flex justify-between items-center w-40 h-14   hover:rounded-md hover:scale-110 duration-200 rounded-bl-md">
          <a
            href="https://www.instagram.com/adkrrrrr?utm_source=qr&igsh=ZDUwcWg3bjYwZTJj"
            className="flex justify-between items-center w-full text-white hover:text-pink-200"
            download
            target="_blank"
            rel="noreferrer"
          >
           <FaInstagram size={30} />
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 mr-100 hover:rounded-md hover:scale-110 duration-200 rounded-tl-md">
          <a
            href="https://www.linkedin.com/in/aditya-kumar-546872245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="flex justify-between items-center w-full text-white hover:text-pink-200"
            target="_blank"
            rel="noreferrer"
          >
             <FaLinkedin size={30} />
          </a>
        </li>

        <li className="flex justify-between items-center w-40 h-14 hover:scale-110 duration-200  hover:rounded-md ">
          <a
            href="https://github.com/ioTa03"
            className="flex justify-between items-center w-full text-white  hover:text-pink-200"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </li>

        <li className="flex justify-between items-center w-40 h-14 hover:rounded-md hover:scale-110 duration-200 ">
          <a
            href="mailto:b22me004@iitj.ac.in"
            className="flex justify-between items-center w-full  hover:text-pink-200 text-white"
          >
          <HiMail size={30} />
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 hover:rounded-md hover:scale-110 duration-200">
          <a
            href="https://leetcode.com/adityaewms" 
            className="flex justify-between items-center w-full text-white hover:text-yellow-400"
            target="_blank"
            rel="noreferrer"
          >
            <SiLeetcode size={30} />
          </a>
        </li>
        
      </ul>
    </div>
  );
};
export default Social;