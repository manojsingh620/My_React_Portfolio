import React, { useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Header = () => {
  const [opensidebar,setOpensidebar]=useState(false)

  const clickhandle=(e)=>{
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.style.backgroundColor = ''; // Remove background color
      item.style.borderBottom = ''; // Remove underline
      item.style.color = ''; // Reset text color
  });
  e.target.style.backgroundColor = '#e53e3e'; // Set background color to red
    e.target.style.borderBottom = '2px solid #e53e3e'; // Add red underline
    e.target.style.color = 'white';
  }
  document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', clickhandle);
    });
});
  return (
    <div className="fixed z-40 w-full bg-black ">
      <div className=" h-14 w-full flex justify-evenly ">
        <div className="h-full flex items-center">
          <p className="text-2xl font-bold text-red-600">Manoj Singh Kuntiya</p>
        </div>
        <div className="hidden h-full md:flex items-center">
          <ul className="flex justify-evenly">
            <Link to={"/"} onClick={clickhandle} className="nav-item m-2 p-1 rounded text-white ">
              HOME
            </Link>
            
            <Link to={"/projects"} onClick={clickhandle} className="nav-item m-2 p-1 rounded text-white ">
              PROJECTS
            </Link>
            <Link to={"/skills"} onClick={clickhandle} className="nav-item m-2 p-1 rounded text-white ">
              SKILLS
            </Link>
            <Link to={"/contect"} onClick={clickhandle} className="nav-item m-2 p-1 rounded text-white ">
              CONTECT
            </Link>
          </ul>
        </div>

        <div className="hidden  md:flex  justify-evenly items-center">
          <a href="https://www.linkedin.com/in/manojsinghkuntiya" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600 hover:bg-white text-2xl m-2 hover:scale-125 transition-all rounded"><FaLinkedin /></a>
          <a href="https://github.com/manojsingh620"><FaGithub className="text-white hover:text-red-600 hover:bg-white text-2xl m-2 hover:scale-125 transition-all rounded"/></a>
          <a href="https://www.instagram.com/manoj._684?igsh=dGh4NTU2emQ2a3Yz"><GrInstagram className="text-white hover:text-red-600 hover:bg-white text-2xl m-2 hover:scale-125 transition-all rounded-md"/></a>
        </div>

        <div className="hidden h-full w-20 md:flex items-center ">
          <button className=" border p-2 w-full rounded-full bg-red-600 border-none hover:bg-red-700 flex items-center justify-center px-3 py-0">
            <IoMdDownload className="text-white"/> 
            <p className="text-white">CV</p>
          </button>
        </div>
        
        <div className="text-white md:hidden flex justify-center items-center right-0 ">
        <GiHamburgerMenu className="text-xl" onClick={()=>setOpensidebar(true)}/>
        {
          opensidebar && (<Sidebar onclose={()=>setOpensidebar(false)} />)
        }
        </div>
      </div>
    </div>
  );
};

export default Header;
