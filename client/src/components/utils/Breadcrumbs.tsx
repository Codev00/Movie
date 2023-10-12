import Link from "next/link";
import { useEffect, useState } from "react";

const Breadcrumbs = ({
   mediaType,
   mediaName,
   with_genres,
}: {
   mediaType: string | string[];
   mediaName?: string | string[];
   with_genres?: string | string[];
}) => {
   const [data, setData] = useState<
      { name: string | string[]; link: string }[]
   >([]);
   useEffect(() => {
      if (mediaName) {
         if (mediaType === "movie") {
            setData([
               { name: "Home", link: "/" },
               { name: "Movie", link: "/movie" },
               { name: mediaName, link: "/" },
            ]);
         } else {
            setData([
               { name: "Home", link: "/" },
               { name: "TV-Series", link: "/tv" },
               { name: mediaName, link: "/" },
            ]);
         }
      } else if (with_genres) {
         if (mediaType === "movie") {
            setData([
               { name: "Home", link: "/" },
               { name: "Movie", link: "/movie" },
               { name: with_genres, link: "/" },
            ]);
         } else {
            setData([
               { name: "Home", link: "/" },
               { name: "TV-Series", link: "/tv" },
               { name: with_genres, link: "/" },
            ]);
         }
      } else {
         if (mediaType === "movie") {
            setData([
               { name: "Home", link: "/" },
               { name: "Movie", link: "/movie" },
            ]);
         } else {
            setData([
               { name: "Home", link: "/" },
               { name: "TV-Series", link: "/tv" },
            ]);
         }
      }
   }, [mediaType, mediaName, with_genres]);
   return (
      <div className="w-full h-[50px] flex items-center flex-wrap mx-2 md:mx-0">
         {data.map((item: any, index: number) => (
            <h6 key={index}>
               <Link href={item.link}>{item.name}</Link>
               {index < data.length - 1 && (
                  <span className="md:mx-3 mx-2">{">"}</span>
               )}
            </h6>
         ))}
      </div>
   );
};

export default Breadcrumbs;
