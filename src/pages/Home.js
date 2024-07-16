import React from "react";
import Logo4 from "../assest/Logo4.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" bg-gradient-to-r from-blue-500 to-white md:flex">
      <div className="md:w-1/2   md:h-screen flex justify-center items-center flex-wrap">
        <div className="px-16 mt-16">
          <p  className="text-3xl text-center">Hi, I'm <b className="text-4xl">Manoj Singh Kuntiya</b></p>
          <p className="text-center text-red-700 font-serif font-bold p-2">Full Stack developer</p>
          <p className="text-black text-2xl text-center">
           I'm a full stack web developer with experience in the MERN stack and DSA with Java. I’ve worked on various projects I'm
            also familiar with React Native and Web3 projects.
          </p>
          <Link to={"/contect"}><button className="m-5 text-white font-bold px-4 py-1 rounded-full bg-red-600 hover:bg-white hover:text-red-600 outline-none">Connect</button></Link>
          
        </div>
      </div>
      <div className="md:w-1/2  md:h-screen flex justify-center items-center  pb-2 md:pb-0 ">
        <div className="hover:scale-125 transition-all">
          <img src={Logo4} alt="myimg" className="h-80 rounded-full " />
        </div>
      </div>
    </div>
  );
};

export default Home;
