import React, { useState } from "react";
import { navLinks, menu, close,logo } from "../../constants/index.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
 

function Navbar() {
  const [toggle, setToggle] = useState(false);

 
 
 






  return (
    <>
      <nav className=" w-full bg-yellow-700  sm:h-[70px] h-[70px] flex sm:justify-between sm:px-20 px-8 items-center sticky top-0 z-[10]">
        {/* logo */}
        <div className="flex justify-center items-center">
          <img
            src={logo}
            alt="logo"
            className="w-[50px]  drop-shadow-3xl rounded-full"
          />
          <h1 className="text-white ml-2 font-[600] text-[24px] ">News4u</h1> 
          <button className="download_app">Download</button>
        </div>
        <div>
          {/* menu - navlinks */}
          <ul className="sm:flex hidden ">
            <li
              className="mx-5 text-[20px] text-white"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <Link
                to="/"
                className=" hover:text-gray-300"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                General
              </Link>
            </li>
            {navLinks.map((link) => (
              <li key={link.id} className=" mx-5 text-[20px] text-white">
                <Link to={`/${link.id}`} className="hover:text-gray-300">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* navlinks for small devices */}
          <div className="sm:hidden flex">
            <img
              src={toggle ? close : menu}
              className=" h-10 w-10 cursor-pointer absolute right-10 top-5"
              onClick={() => {
                setToggle(!toggle);
              }}
            />
            <motion.div
              className={`${
                toggle ? "flex" : "hidden"
              } absolute top-[80px] right-[10px]`}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
            >
              <ul className="flex flex-col bg-yellow-700 py-10 pr-10 pl-5 text-white rounded-xl">
                <li
                  className=" mx-3 text-lg leading-9"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <Link
                    to="/"
                    className=" cursor-pointer hover:text-green-950 text-[23px]"
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    General
                  </Link>
                </li>
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className=" mx-3 text-lg leading-9"
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    <Link
                      to={`/${link.id}`}
                      className=" cursor-pointer hover:text-green-950 text-[23px]"
                      onClick={() => {
                        setToggle(!toggle);
                      }}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
     
      </nav>
     
    </>
  );
}

export default Navbar;
