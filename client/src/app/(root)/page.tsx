"use client";
import Banner from "@/components/Home/Banner";
import CategoryBanner from "@/components/Home/CategoryBanner";
import UpComing from "@/components/Home/UpComing";
import Loading from "@/components/utils/Loading";
import Aos from "aos";
import { Suspense, useEffect } from "react";

export default function Home() {
   useEffect(() => {
      Aos.init({
         disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
         startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
         initClassName: "aos-init", // class applied after initialization
         animatedClassName: "aos-animate", // class applied on animation
         useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
         disableMutationObserver: false, // disables automatic mutations' detections (advanced)
         debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
         throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

         // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
         offset: 120, // offset (in px) from the original trigger point
         delay: 100, // values from 0 to 3000, with step 50ms
         duration: 1000, // values from 0 to 3000, with step 50ms
         easing: "ease", // default easing for AOS animations
         once: false, // whether animation should happen only once - while scrolling down
         mirror: false, // whether elements should animate out while scrolling past them
         anchorPlacement: "top-bottom", //defines which position of the element regarding to window should trigger the animation
      });
   }, []);
   return (
      <Suspense fallback={<Loading />}>
         <main className=" flex flex-col pt-[60px] md:pt-[0px]">
            <Banner mediaType="movie" mediaCategory="popular" />
            <CategoryBanner name="Trending" data={["day", "week"]} />
            <CategoryBanner name="Top Rate" data={["movie", "tv"]} />
            <UpComing />
         </main>
      </Suspense>
   );
}
