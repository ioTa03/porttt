import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navi = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    // Add overflow-hidden to the body when the mobile menu is open
    if (nav) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Cleanup function to remove the class if component unmounts
    return () => document.body.classList.remove("overflow-hidden");
  }, [nav]);

  return (
    <div className="flex z-[1000] justify-between items-center w-full h-20 px-4 z-6 text-white bg-black fixed">
      <ul className="hidden md:flex">
        <li className="px-4 cursor-pointer capitalize font-medium text-pink-500 hover:scale-110 duration-200">
          <div><Link to="/" smooth duration={600}>home</Link></div>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-pink-500 hover:scale-110 duration-200">
          <div><Link to="/me" smooth duration={600}>about</Link></div>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-pink-500 hover:scale-110 duration-200">
          <div><Link to="/portfolio" smooth duration={600}>portfolio</Link></div>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-pink-500 hover:scale-110 duration-200">
          <div><Link to="/contact" smooth duration={600}>contact</Link></div>
        </li>
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-pink-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900 text-pink-500">
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-110 duration-200" onClick={() => setNav(false)}>
            <div><Link to="/" smooth duration={600}>home</Link></div>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-110 duration-200" onClick={() => setNav(false)}>
            <div><Link to="/me" smooth duration={600}>about</Link></div>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-110 duration-200" onClick={() => setNav(false)}>
            <div><Link to="/portfolio" smooth duration={600}>portfolio</Link></div>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-110 duration-200" onClick={() => setNav(false)}>
            <div><Link to="/contact" smooth duration={600}>contact</Link></div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navi;


// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// const Navi = () => {
//   const [nav, setNav] = useState(false);

//   return (
//     <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed  ">
//       <div>
        
//       </div>

//       <ul className=" md:flex ">
//         <li className="px-4 cursor-pointer capitalize font-medium text-pink-500 hover:scale-110 duration-200">
//           <div><Link to="home" >home</Link></div>
//         </li>
//         <li className="px-4 cursor-pointer capitalize font-medium text-pink-500 hover:scale-110 duration-200">
//           <div><Link to="me">abouts</Link></div>
//         </li>
//         <li className="px-4 cursor-pointer capitalize font-medium text-pink-500 hover:scale-110 duration-200">
//           <div><Link to="portfolio">project</Link></div>
//         </li>
//         {/* <li className="px-4 cursor-pointer capitalize font-medium text-pink-500 hover:scale-110 duration-200">
//           <div>Socials</div>
//         </li> */}
//         <li className="px-4 cursor-pointer capitalize font-medium text-pink-500 hover:scale-110 duration-200">
//           <div><Link to="contact" >contact</Link></div>
//         </li>
//       </ul>

//       <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-pink-500 md:hidden " >
//         {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
//       </div>

//       {nav && (
//         <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b bg-black text-pink-500">
//           <li className="px-4 cursor-pointer capitalize py-6 text-4xl  hover:scale-110 duration-200" to="/" onClick={() => setNav(!nav)}>
//             <div> <Link to="home" smooth duration={600}>Home</Link> </div>
//           </li>
//           <li className="px-4 cursor-pointer capitalize py-6 text-4xl  hover:scale-110 duration-200" to="/me" onClick={() => setNav(!nav)}>
//             <div><Link to="me" smooth duration={600}>about</Link></div>
//           </li>
//           <li className="px-4 cursor-pointer capitalize py-6 text-4xl  hover:scale-110 duration-200" to="/portfolio" onClick={() => setNav(!nav)}>
//             <div><Link to="portfolio" smooth duration={600}>portfolio</Link></div>
//           </li>
//           {/* <li className="px-4 cursor-pointer capitalize py-6 text-4xl  hover:scale-110 duration-200" to="/experience" onClick={() => setNav(!nav)}>
//             <div><Link to="experience" smooth duration={600}>experience</Link></div>
//           </li> */}
//           <li className="px-4 cursor-pointer capitalize py-6 text-4xl  hover:scale-110 duration-200" to="/contact" onClick={() => setNav(!nav)}>
//             <div><Link to="contact" smooth duration={600}>contact</Link></div>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Navi;
// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// const Navi = () => {
//   const [nav, setNav] = useState(false);

//   return (
//     <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed  ">
//       <div>
        
//       </div>

//       <ul className=" md:flex ">
//         <li className="px-4 cursor-pointer capitalize font-medium text-pink-500 hover:scale-110 duration-200">
//           <div><Link to="home" >home</Link></div>
//         </li>
//         <li className="px-4 cursor-pointer capitalize font-medium text-pink-500 hover:scale-110 duration-200">
//           <div><Link to="me">abouts</Link></div>
//         </li>
//         <li className="px-4 cursor-pointer capitalize font-medium text-pink-500 hover:scale-110 duration-200">
//           <div><Link to="portfolio">project</Link></div>
//         </li>
//         {/* <li className="px-4 cursor-pointer capitalize font-medium text-pink-500 hover:scale-110 duration-200">
//           <div>Socials</div>
//         </li> */}
//         <li className="px-4 cursor-pointer capitalize font-medium text-pink-500 hover:scale-110 duration-200">
//           <div><Link to="contact" >contact</Link></div>
//         </li>
//       </ul>

//       <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-pink-500 md:hidden " >
//         {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
//       </div>

//       {nav && (
//         <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b bg-black text-pink-500">
//           <li className="px-4 cursor-pointer capitalize py-6 text-4xl  hover:scale-110 duration-200" to="/" onClick={() => setNav(!nav)}>
//             <div> <Link to="home" smooth duration={600}>Home</Link> </div>
//           </li>
//           <li className="px-4 cursor-pointer capitalize py-6 text-4xl  hover:scale-110 duration-200" to="/me" onClick={() => setNav(!nav)}>
//             <div><Link to="me" smooth duration={600}>about</Link></div>
//           </li>
//           <li className="px-4 cursor-pointer capitalize py-6 text-4xl  hover:scale-110 duration-200" to="/portfolio" onClick={() => setNav(!nav)}>
//             <div><Link to="portfolio" smooth duration={600}>portfolio</Link></div>
//           </li>
//           {/* <li className="px-4 cursor-pointer capitalize py-6 text-4xl  hover:scale-110 duration-200" to="/experience" onClick={() => setNav(!nav)}>
//             <div><Link to="experience" smooth duration={600}>experience</Link></div>
//           </li> */}
//           <li className="px-4 cursor-pointer capitalize py-6 text-4xl  hover:scale-110 duration-200" to="/contact" onClick={() => setNav(!nav)}>
//             <div><Link to="contact" smooth duration={600}>contact</Link></div>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Navi;
