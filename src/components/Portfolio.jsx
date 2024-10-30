import React from "react";
import Html1 from "../assets/w3.jpg";
import Html2 from "../assets/w1.png";
import Html3 from "../assets/w2.png";
import img1 from "../assets/docu1.png";
import img2 from "../assets/healthify.png";
import img3 from "../assets/spark.png";
import img4 from "../assets/sas.png";
import img5 from "../assets/ff.png";
import img6 from "../assets/dvp.png";



// Sample project data
const projects = [
  {
    id: 1,
    title: "DocuWhisper",
    description: "AI-powered document analysis app using NextJS, OpenAI’s GPT API with RAG, PineconeDB, and AWS S3 for low-latency document context analysis and secure storage.",
    image: img1,
    link: "https://github.com/ioTa03/DocsWhisper"
  },
  {
    id: 2,
    title: "Healthify (Ongoing)",
    description: "Healthcare patient portal with appointment booking, admin dashboard, and real-time performance monitoring using Next.js, Appwrite, Twilio, TailwindCSS, ShadCN, and Sentry.",
    image: img2,
    link: "https://github.com/ioTa03/Healthify"
  },
  {
    id: 3,
    title: "SPARK | Automatic Minesweeper Solver",
    description: "Minesweeper solver using a custom data structure for probability suggestion and real-time feedback on mine locations, developed with Python, C++, and Tkinter.",
    image: img3,
    link: "https://github.com/ioTa03/ideathon-dsa"
  },
  {
    id: 4,
    title: "Data-Driven Analysis of Fluid Flows",
    description: "Applied statistical techniques for fluid flow analysis using Jupyter Notebook, Python, and noise-cleaning methods, achieving high-quality image reconstruction.",
    image: img5,
    link: "https://github.com/ioTa03/Data-Driven-Analysis-of-Fluid-Flows-"
  },
  {
    id: 5,
    title: "Ad-Engagement",
    description: "Sentiment analysis using VADER for understanding engagement patterns on social media and optimizing ad content based on user interactions.",
    image: img4,
    link: "https://github.com/ioTa03/Ad-Engagement"
  },
  {
    id: 6,
    title: "DevlupLabs-Website1",
    description: "Revamped the DevlUp Labs website from Vue to React, integrated with FastAPI and MongoDB, and optimized data handling and API routing.",
    image: img6,
    link: "https://github.com/ioTa03/DevlupLabs-Website1"
  },
  {
    id: 7,
    title: "SFMD Diagram Plotter",
    description: "Plots the Shear Force and Bending Moment for various loads.",
    image: Html1,
    link: "https://iota03.github.io/ShearForceBendingMoment_/"
  },
  {
    id: 8,
    title: "Microsoft Clone",
    description: "A responsive Microsoft clone using Tailwind.",
    image: Html3,
    link: "https://iota03.github.io/Microsoft-Responsive-Clone-tailwind/"
  },
  {
    id: 9,
    title: "Current Project",
    description: "See Magic ;-)",
    image: Html2,
    link: "/"
  },
 
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <div name="portfolio" className="bg-black text-white w-full py-10">
      <div className="px-24 p-20 flex flex-col justify-start"> {/* Adjusted for full width */}
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-red-700 text-white hover:scale-105 hover:text-pink-200 duration-300">
            Projects
          </p>
          <p className="py-6 text-pink-200">
            Some of the projects that I have done and that are hosted on Github are:
          </p>
        </div>

        {/* Grid updated to have 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 duration-300">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
              </a>
              <h1 className="text-lg font-semibold">{project.title}</h1>
              <p className="text-sm mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
