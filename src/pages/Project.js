import React from "react";
import Logo2 from "../assest/Logo2.png";
import Logo3 from "../assest/Logo3.png";
import Logo5 from "../assest/Logo5.png";
import Logo6 from "../assest/Logo6.png";

const Project = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-white flex items-center justify-center ">
      <div className="pt-16 w-full md:flex flex-wrap justify-evenly md:mx-40  ">
        <div className=" m-4 p-2 rounded shadow-md flex flex-col items-center justify-center  hover:scale-110 transition-all" >
          <p className="bg-black w-full rounded-t text-white text-center p-1 font-serif">Ecommerce site</p>
          <img src={Logo2} alt="logoimg1" className="h-60  "/>
          <div className="flex w-full justify-evenly bg-black rounded-b ">
            <a href="https://github.com/manojsingh620/fullstack_ecommerce_website"><button className=" border hover:bg-white hover:text-red-600 bg-red-600 text-white hover:shadow-lg   border-none px-3 my-5  rounded-full ">github</button></a>
            <a href="https://fullstack-ecommerce-website-rsuv.vercel.app/"><button className="border hover:bg-white hover:text-red-600 bg-red-600 text-white hover:shadow-lg   border-none px-3 my-5  rounded-full ">visite </button></a>
          </div>
        </div>
        <div className=" m-4 p-2 rounded shadow-md flex flex-col items-center justify-center  hover:scale-110 transition-all" >
          <p className="bg-black w-full rounded-t text-white text-center p-1 font-serif">Car Rental site</p>
          <img src={Logo5} alt="logoimg1" className="h-60  "/>
          <div className="flex w-full justify-evenly bg-black rounded-b ">
            <a href="https://github.com/manojsingh620/GearUp_project"><button className=" border hover:bg-white hover:text-red-600 bg-red-600 text-white hover:shadow-lg   border-none px-3 my-5  rounded-full ">github</button></a>
            <a href="https://gearup-project.onrender.com/listings"><button className="border hover:bg-white hover:text-red-600 bg-red-600 text-white hover:shadow-lg   border-none px-3 my-5  rounded-full ">visite </button></a>
          </div>
        </div>
        <div className=" m-4 p-2 rounded shadow-md flex flex-col items-center justify-center  hover:scale-110 transition-all" >
          <p className="bg-black w-full rounded-t text-white text-center p-1 font-serif">AirBNB clone/not responsive</p>
          <img src={Logo6} alt="logoimg1" className="h-60  "/>
          <div className="flex w-full justify-evenly bg-black rounded-b ">
            <a href="https://github.com/manojsingh620/Wonderlust-Airbnb-clone"><button className=" border hover:bg-white hover:text-red-600 bg-red-600 text-white hover:shadow-lg   border-none px-3 my-5  rounded-full ">github</button></a>
            <a href="https://firstproject-ob5r.onrender.com/listings"><button className="border hover:bg-white hover:text-red-600 bg-red-600 text-white hover:shadow-lg   border-none px-3 my-5  rounded-full ">visite </button></a>
          </div>
        </div>
        <div className=" m-4 p-2 rounded shadow-md flex flex-col items-center justify-center  hover:scale-110 transition-all" >
          <p className="bg-black w-full rounded-t text-white text-center p-1 font-serif">Apna-college (frontend clone)/not responsive </p>
          <img src={Logo3} alt="logoimg1" className="h-60  "/>
          <div className="flex w-full justify-evenly bg-black rounded-b ">
            <a href="https://github.com/manojsingh620/HTML_CSS_PROJECTS/tree/main/apnaColClone"><button className=" border hover:bg-white hover:text-red-600 bg-red-600 text-white hover:shadow-lg   border-none px-3 my-5  rounded-full ">github</button></a>
            <a href="https://html-css-projects-pi.vercel.app/"><button className="border hover:bg-white hover:text-red-600 bg-red-600 text-white hover:shadow-lg   border-none px-3 my-5  rounded-full ">visite </button></a>
          </div>
        </div>
 
        
      </div>
    </div>
  );
};

export default Project;
