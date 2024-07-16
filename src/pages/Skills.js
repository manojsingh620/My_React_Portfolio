import React from "react";
import Certificate from '../assest/certificate.jpg'
import bootestrap from '../assest/bootestrap.png'
import css from '../assest/css.png'
import express from '../assest/express.png'
import html from '../assest/html.png'
import js from '../assest/js.png'
import mongodb from '../assest/mongedb.png'
import nodejs from '../assest/nodejs.png'
import react from '../assest/react.png'
import Reduc from '../assest/Redux.png'
import tailwindcss from '../assest/tailwindcss.png'

const Skills = () => {

  
  return (
    <div className="bg-gradient-to-r  from-blue-500 to-white md:h-screen">
      <div className="md:mx-10  pt-16">
        <div>
          <p className="text-center text-black text-2xl font-bold underline  rounded-full"> Certificate</p>
          <div className="p-10 flex justify-center items-center  shadow-md ">
            <img src={Certificate} alt="certificate" className="h-60 w-full md:w-96 rounded p-5 hover:scale-125 transition-all" />
          </div>
        </div>
        <div>
        <p className="text-center text-black text-2xl font-bold underline  rounded-full mt-10">Technology</p>
        <div className="mt-10 flex flex-wrap justify-evenly">
          <div className="rounded p-3 m-2 border-red-600  border-2 outline-none">
            <img src={bootestrap} alt="bootestrap" className="w-20 h-20 hover:scale-125 transition-all"/>
          </div>
          <div className="rounded p-3 m-2 border-red-600  border-2 outline-none">
            <img src={css} alt="bootestrap" className="w-20 h-20 hover:scale-125 transition-all"/>
          </div>
          <div className="rounded p-3 m-2 border-red-600  border-2 outline-none">
            <img src={express} alt="bootestrap" className="w-20 h-20 hover:scale-125 transition-all"/>
          </div>
          <div className="rounded p-3 m-2 border-red-600  border-2 outline-none">
            <img src={html} alt="bootestrap" className="w-20 h-20 hover:scale-125 transition-all"/>
          </div>
          <div className="rounded p-3 m-2 border-red-600  border-2 outline-none">
            <img src={js} alt="bootestrap" className="w-20 h-20 hover:scale-125 transition-all"/>
          </div>
          <div className="rounded p-3 m-2 border-red-600  border-2 outline-none">
            <img src={mongodb} alt="bootestrap" className="w-20 h-20 hover:scale-125 transition-all"/>
          </div>
          <div className="rounded p-3 m-2 border-red-600  border-2 outline-none">
            <img src={nodejs} alt="bootestrap" className="w-20 h-20 hover:scale-125 transition-all"/>
          </div>
          <div className="rounded p-3 m-2 border-red-600  border-2 outline-none">
            <img src={Reduc} alt="bootestrap" className="w-20 h-20 hover:scale-125 transition-all"/>
          </div>
          <div className="rounded p-3 m-2 border-red-600  border-2 outline-none">
            <img src={tailwindcss} alt="bootestrap" className="w-20 h-20 hover:scale-125 transition-all"/>
          </div>
          <div className="rounded p-3 m-2 border-red-600  border-2 outline-none">
            <img src={react} alt="bootestrap" className="w-20 h-20 hover:scale-125 transition-all"/>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
