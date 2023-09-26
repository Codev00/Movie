"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import Link from "next/link";

const Mexon = localFont({
   src: "../../public/fonts/Mexon.otf",
   display: "swap",
});
const Navbar = () => {
   const [scroll, setScroll] = useState(0);
   useEffect(() => {
      window.addEventListener("scroll", () => {
         setScroll(window.scrollY);
      });

      return () => {
         window.removeEventListener("scroll", () => {
            setScroll(window.scrollY);
         });
      };
   }, [scroll]);
   return (
      <div
         className={`flex flex-row items-center justify-evenly h-[60px] bg-transparent fixed w-full top-0 z-50 ${
            scroll > 0 && "!bg-black/90 "
         }`}
      >
         <div className="logo w-60 flex h-[60px] items-center justify-end gap-2">
            <Image src="/images/Logo.png" width={50} height={50} alt="" />
            <span className={`text-3xl text-white  ${Mexon.className}`}>
               Matrix
            </span>
         </div>
         <div className="nav-list w-[60%]">
            <ul className="flex flex-row items-center gap-x-5 text-xl font-medium text-white transition-all">
               <li className="">
                  <Link
                     href={"/"}
                     className="border-b-[3px] border-transparent hover:border-red-600   duration-300 ease-linear"
                  >
                     Home
                  </Link>
               </li>
               <li>
                  <Link
                     href={"/movie"}
                     className="border-b-[3px] border-transparent hover:border-red-600   duration-300 ease-linear"
                  >
                     Movie
                  </Link>
               </li>
               <li>
                  <Link
                     href={"/tv"}
                     className="border-b-[3px] border-transparent hover:border-red-600   duration-300 ease-linear"
                  >
                     TV
                  </Link>
               </li>
               <li>
                  <Link
                     href={"/about"}
                     className="border-b-[3px] border-transparent hover:border-red-600   duration-300 ease-linear"
                  >
                     About
                  </Link>
               </li>
            </ul>
         </div>
         <div className="right-bar">User</div>
      </div>
   );
};

export default Navbar;
