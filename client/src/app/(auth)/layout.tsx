"use client";
import { Metadata } from "next";
import "../globals.css";
import { useEffect } from "react";
import { randomImages } from "@/utils/function";
import Providers from "@/redux/Providers";
export const metadata: Metadata = {
   title: "Matrix | Login",
};
export default function RootLayout({
   children, // will be a page or nested layout
}: {
   children: React.ReactNode;
}) {
   const images = ["1", "2"];
   useEffect(() => {
      randomImages(images);
      return () => {};
   }, []);

   return (
      <html lang="en">
         <Providers>
            <body className="h-screen bg-[url('/images/hero.jpg')] bg-cover bg-no-repeat">
               <div className="h-screen bg-black/50">{children}</div>
            </body>
         </Providers>
      </html>
   );
}
