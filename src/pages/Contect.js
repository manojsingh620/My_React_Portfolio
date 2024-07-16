import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import {  toast } from 'react-toastify';


const Contect = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "68c6933a-97bf-445f-9cf7-78ff91846e7c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.error("Try one more time")
    }
  };

  return (
    <div className="bg-gradient-to-r w-full  from-blue-500 to-white h-screen pt-16">
      <div className="max-w-md mx-auto justify-evenly">
        <div className=" mx-2   my-10 bg-gradient-to-r from-blue-400 to-slate-500 max-w-md  md:w-full p-5 rounded">
          <div className="text-center font-bold">Connect Us</div>
          <form onSubmit={onSubmit}>
            <div className="relative p-2 mb-3 w-full">
              <input
                type="text"
                id="name"
                name="name"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2 px-1 text-sm text-black focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-3  origin-[0] -translate-y-6 scale-75 transform text-md  text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-black"
              >
                Full Name
              </label>
            </div>
            <div className="relative p-2 mb-3">
              <input
                type="email"
                name="email"
                id="email"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2 px-1 text-sm text-black focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-3  origin-[0] -translate-y-6 scale-75 transform text-md  text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-black"
              >
                Email address
              </label>
            </div>
            <div className="relative p-2 mb-3">
              <input
                type="text"
                id="message"
                name="message"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2 px-1 text-sm text-black focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="message"
                className="absolute left-0 top-3  origin-[0] -translate-y-6 scale-75 transform text-md text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-black"
              >
                Message
              </label>
            </div>

            <div className="flex justify-center items-center">
              <button type="submit" className="border px-4 py-1 rounded-full hover:border-red-600 hover:border-2 ">
                Submit
              </button>
              {/* <ToastContainer /> */}
            </div>
          </form>
          <div className="text-center text-white font-bold">{result}</div>
        </div>

        <div className=" max-w-md my-10">
          <div className="flex justify-center items-center mb-7 mx-2 shadow-md">
            <div className="p-2 flex text-xl">
              <TfiEmail />
            </div>
            <p className="p-2 text-lg">singhkum684@gmail.com</p>
          </div>
          <div className="w-full ">
            <div className="flex items-center justify-center mb-4">
              <p className="text-red-600 text-xl border-b-2 border-blue-600">Get Touch with Social Media</p>
            </div>

            <div className="flex justify-evenly">
              <a href="https://www.linkedin.com/in/manojsinghkuntiya"><FaLinkedin className="text-3xl"/></a>
              <a href="https://github.com/manojsingh620"><FiGithub className="text-3xl"/></a>
              <a href="https://www.instagram.com/manoj._684?igsh=dGh4NTU2emQ2a3Yz"><FaInstagram className="text-3xl"/></a>
              <a href="https://x.com/KuntiyaManoj"><FaTwitter className="text-3xl"/></a>
              <a href="https://www.youtube.com/@ezytech4u"><FiYoutube className="text-3xl"/></a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contect;
