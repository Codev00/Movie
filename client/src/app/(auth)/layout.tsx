import { Metadata } from "next";
import "../globals.css";
export const metadata: Metadata = {
   title: "Matrix | Login",
};
export default function AuthLayout({
   children, // will be a page or nested layout
}: {
   children: React.ReactNode;
}) {
   return (
      <section>
         <div className="h-screen bg-[url('/images/hero.jpg')] bg-cover bg-no-repeat">
            <div className="h-screen bg-black/50">{children}</div>
         </div>
      </section>
   );
}
