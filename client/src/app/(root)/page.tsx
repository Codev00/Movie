"use client";
import Banner from "@/components/Banner";
import CategoryBanner from "@/components/CategoryBanner";

export default function Home() {
   return (
      <main className=" flex flex-col ">
         <Banner mediaType="movie" mediaCategory="popular" />
         <CategoryBanner name="Trending" data={["day", "week"]} />
         <CategoryBanner name="Top Rate" data={["movie", "tv"]} />
      </main>
   );
}
