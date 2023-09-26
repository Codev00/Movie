import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/redux/Providers";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "aos/dist/aos.css";

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
      <html lang="en" data-theme="night">
         <body className={`overflow-x-hidden ${inter.className}`}>
            <Providers>
               <Navbar />
               {children}
               <Footer />
            </Providers>
         </body>
      </html>
   );
}
