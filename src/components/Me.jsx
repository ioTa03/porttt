import React, { useContext } from 'react';
import { UserContext } from '../context/UserContextProvider';

const Me = () => {
  const { user } =  useContext(UserContext);
  return (
    <section>
        <div className="bg-black text-white py-24 ">
            <div className="container mx-auto flex flex-col items-start md:flex-row ">
                <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-14">

                        { (<div><img src={user.avatar_url} alt="Profile" className="w-30 h-30 rounded-full" />
                        <p className="text-3xl md:text-3xl leading-normal md:leading-relaxed mb-2 text-pink-300 ease-in">Hey I'm {user.name}</p>
                        <p className="text-sm md:text-base text-gray-50 mb-4">
                        {user.bio}

                        {/* Roots from Kanpur, Born in Delhi and brought up in Bengal, my skills are as diverse as my journey. */}
                    </p>
                </div>
                
          )}
                    <a href="/" className="bg-transparent mr-auto hover:bg-pink-300 text-pink-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-red-600 hover:border-transparent">
                        Connect With Me
                    </a>
                </div>
                <div className="ml-0 md:ml-12 lg:w-2/3 sticky py-12">
                    <div className="container mx-auto w-full h-full">
                        <div className="relative wrap overflow-hidden p-10 h-full">
                            <div className="border-2-2 border-pink-555 absolute h-full border right: 50%; border: 2px solid #FFC100; border-radius: 1%;"></div>
                            <div className="border-2-2 border-pink-555 absolute h-full border left: 50%; border: 2px solid #FFC100; border-radius: 1%;"></div>
                            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                <div className="order-1 w-5/12"></div>
                                <div className="order-1 w-5/12 px-1 py-4 text-right">
                                    {/* <p className="mb-3 text-base text-pink-300">Boards</p> */}
                                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Xth</h4>
                                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                         Secured 98.6% in Boards, became the district topper,and got 5th rank in Bengal and 6th pan-India. 
                                    </p>
                                </div>
                            </div>
                            <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                <div className="order-1 w-5/12"></div>
                                <div className="order-1 w-5/12 px-1 py-4 text-left">
                                    {/* <p className="mb-3 text-base text-pink-300"></p> */}
                                    <h4 className="mb-3 font-bold text-lg md:text-2xl">XIIth</h4>
                                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                       Covid hit. No exams. Scored 96%. :-( Learnt Java when I could. Had fun. Binged shows and movies, have seen everything (almost). Always up for discussions!!
                                    </p>
                                </div>
                            </div>
                            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                <div className="order-1 w-5/12"></div>
                                <div className="order-1 w-5/12 px-1 py-4 text-right">
                                    {/* <p className="mb-3 text-base text-pink-300"> 10 May, 2021</p> */}
                                    <h4 className="mb-3 font-bold text-lg md:text-2xl">College</h4>
                                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                        Jee journey was unexpected. Landed in IIT Jodhpur Mechanical Department. Currently DR-3 with CG 8.50, excelling in CS related courses.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                <div className="order-1 w-5/12"></div>
                                <div className="order-1 w-5/12 px-1 py-4">
                                    <p className="mb-3 text-base text-pink-300">Future</p>
                                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Plans</h4>
                                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                        ..........................
                                        .
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img className="mx-auto -mt-36 md:-mt-36" src="me.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
     
  );
};

export default Me;
