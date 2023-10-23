"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import NextLink from "next/link";
import {
   Navbar,
   NavbarBrand,
   NavbarContent,
   NavbarItem,
   Button,
   Link,
   NavbarMenu,
   NavbarMenuItem,
   NavbarMenuToggle,
   Dropdown,
   DropdownTrigger,
   Avatar,
   DropdownMenu,
   DropdownItem,
   Image,
} from "@nextui-org/react";
import { AcmeLogo } from "./icon/AcmeLogo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setActive } from "@/redux/global.slice";
import { useParams, useRouter } from "next/navigation";
const NavbarTop = () => {
   const [scroll, setScroll] = useState(0);
   const { mediaType } = useParams();
   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   const router = useRouter();
   const menuItems = [
      { name: "Home", link: "/" },
      { name: "Movie", link: "/movie" },
      { name: "TV/Series", link: "/tv" },
      { name: "About", link: "/about" },
   ];
   const isActive = useSelector((state: RootState) => state.global.isActive);
   const dispatch = useDispatch();
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
   useLayoutEffect(() => {
      if (mediaType === undefined) dispatch(setActive("Home"));
      if (mediaType === "movie") dispatch(setActive("Movie"));
      if (mediaType === "tv") dispatch(setActive("TV/Series"));
   }, [mediaType]);
   return (
      <Navbar
         shouldHideOnScroll
         onMenuOpenChange={setIsMenuOpen}
         isBlurred={false}
         className={`${
            scroll === 0 ? "md:bg-transparent" : "bg-black/60"
         } bg-black/90 fixed `}
         classNames={{
            menuItem: ["hover:color-danger"],
            item: [
               "flex",
               "relative",
               "items-center",
               "text-2xl",
               "data-[active=true]:font-semibold",
               "data-[active=true]:after:content-['']",
               "data-[active=true]:after:absolute",
               "data-[active=true]:after:bottom-0",
               "data-[active=true]:after:left-0",
               "data-[active=true]:after:right-0",
               "data-[active=true]:after:-bottom-1",
               "data-[active=true]:after:h-[2px]",
               "data-[active=true]:after:rounded-[3px]",
               "data-[active=true]:after:bg-danger",
               "transition-all",
               "duration-300",
               "ease-linear",
            ],
         }}
      >
         <NavbarContent>
            <NavbarMenuToggle
               aria-label={isMenuOpen ? "Close menu" : "Open menu"}
               className="sm:hidden"
            />
            <NavbarBrand
               className="text-white text-2xl font flex gap-2 cursor-pointer"
               onClick={() => router.push("/")}
            >
               <Image src="/images/github-alt.svg" width={35} />
               <p className="font-bold text-inherit peer cursor-pointer">
                  MA{" "}
                  <span className="bg-danger px-2 rounded-md peer-hover:line-through">
                     TRIX
                  </span>
               </p>
            </NavbarBrand>
         </NavbarContent>

         <NavbarContent className="hidden sm:flex gap-4" justify="center">
            {menuItems.map((item, index) => (
               <NavbarItem
                  key={index}
                  isActive={isActive === item.name ? true : false}
                  className="cursor-pointer"
               >
                  <Link
                     color={isActive === item.name ? "danger" : "foreground"}
                     aria-current="page"
                     onClick={() => {
                        dispatch(setActive(item.name));
                        router.push(item.link);
                     }}
                     size="lg"
                  >
                     {item.name}
                  </Link>
               </NavbarItem>
            ))}
         </NavbarContent>
         <NavbarMenu>
            {menuItems.map((item, index) => (
               <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                     color={isActive === item.name ? "danger" : "foreground"}
                     className="w-full"
                     size="lg"
                     href={
                        item.name === "Home"
                           ? "/"
                           : item.name === "Movie"
                           ? "/movie"
                           : item.name === "TV/Series"
                           ? "/tv"
                           : "/about"
                     }
                  >
                     {item.name}
                  </Link>
               </NavbarMenuItem>
            ))}
         </NavbarMenu>
         <NavbarContent as="div" justify="end">
            <Dropdown showArrow placement="bottom">
               <DropdownTrigger>
                  <Avatar
                     isBordered
                     as="button"
                     className="transition-transform object-cover"
                     color="danger"
                     size="md"
                     src="/images/avatar.svg"
                  />
               </DropdownTrigger>
               <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                     <p className="font-bold">Name</p>
                     <p className="font-normal">username</p>
                  </DropdownItem>
                  <DropdownItem key="favorite">Favorites</DropdownItem>
                  <DropdownItem key="setting">Setting</DropdownItem>
                  <DropdownItem key="logout" color="danger">
                     Log Out
                  </DropdownItem>
               </DropdownMenu>
            </Dropdown>
         </NavbarContent>
      </Navbar>
   );
};

export default NavbarTop;
