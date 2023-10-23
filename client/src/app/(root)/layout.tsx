import type { Metadata } from "next";
import Footer from "@/components/utils/Footer";
import "aos/dist/aos.css";
import NavbarTop from "@/components/utils/Navbartop";
import "../globals.css";

export const metadata: Metadata = {
   title: "Matrix",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <section className="">
         <NavbarTop />
         {children}
         <Footer />
      </section>
   );
}
