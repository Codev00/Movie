import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/redux/Providers";
import Footer from "@/components/utils/Footer";
import Navbar from "@/components/utils/Navbar";
import "aos/dist/aos.css";
import NavbarTop from "@/components/utils/Navbartop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Matrix",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en" data-theme="night" className="dark">
         <body className={`overflow-x-hidden ${inter.className}`}>
            <Providers>
               <NavbarTop />
               {children}
               <Footer />
            </Providers>
         </body>
      </html>
   );
}
