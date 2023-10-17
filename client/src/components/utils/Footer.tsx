import React from "react";

const Footer = () => {
   return (
      <div className="w-full ">
         <div className="h-[250px] text-white flex flex-col justify-center items-center mx-10 mt-10 md:mt-5 md:mx-[200px]">
            <div>
               <ul className="flex gap-5 items-center justify-center">
                  <li className="cursor-pointer hover:text-danger-500 transition-all duration-300 ease-linear">
                     Terms Of Use
                  </li>
                  <li className="cursor-pointer hover:text-danger-500 transition-all duration-300 ease-linear">
                     Privacy Policy
                  </li>
                  <li className="cursor-pointer hover:text-danger-500 transition-all duration-300 ease-linear">
                     About
                  </li>
                  <li className="cursor-pointer hover:text-danger-500 transition-all duration-300 ease-linear">
                     FAQ
                  </li>
               </ul>
               <p className="text-md my-5 text-center max-w-[800px]"></p>
            </div>
            <div className="text-3xl">
               <ul className="flex gap-4 justify-center">
                  <li className="hover:shadow-2xl shadow-red-400 cursor-pointer">
                     <i className="fi fi-brands-facebook"></i>
                  </li>
                  <li>
                     <i className="fi fi-brands-instagram"></i>
                  </li>
                  <li>
                     <i className="fi fi-brands-github"></i>
                  </li>
                  <li>
                     <i className="fi fi-br-up"></i>
                  </li>
               </ul>
               <div className="text-base text-slate-400 text-justify w-full mt-4">
                  &copy;Copyright 2023 Codev dev Matrix
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
