import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="flex md:hidden  bg-black px-10">
      <div className=" flex w-full justify-evenly items-center mb-5">
        <a href="https://www.linkedin.com/in/manojsinghkuntiya" className="text-white text-2xl m-2">
          <FaLinkedin />
        </a>
        <a href="https://github.com/manojsingh620">
          <FaGithub className="text-white m-2 text-2xl" />
        </a>
        <a href="https://www.instagram.com/manoj._684?igsh=dGh4NTU2emQ2a3Yz">
          <GrInstagram className="text-white m-2 text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
