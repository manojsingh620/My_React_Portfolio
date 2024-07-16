import React from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = ({onclose}) => {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 to-white p-2 top-0 left-0 bottom-0 fixed w-full bg-slate-200">
      <div className="flex ">
        
        <div className=" w-full">
          <Link to={"/"} onClick={onclose}><p className="p-2 m-2 text-center bg-black text-white rounded ">HOME</p></Link>
          <Link to={"/projects"} onClick={onclose}><p className="p-2 m-2 text-center bg-black text-white rounded ">PROJECTS</p></Link>
          <Link to={"/skills"} onClick={onclose}><p className="p-2 m-2 text-center bg-black text-white rounded ">SKILLS</p></Link>
          <Link to={"/contect"} onClick={onclose}><p className="p-2 m-2 text-center bg-black text-white rounded ">CONTECT</p></Link>
        </div>

        <div className="">
          <IoMdClose className="text-3xl text-black" onClick={onclose}/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
