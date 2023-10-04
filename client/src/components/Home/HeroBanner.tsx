import React from "react";

const HeroBanner = () => {
   return (
      <div>
         <div className="wrapper">
            <div className="Content">
               <span>Welcome.</span>
               <span>
                  Millions of movies, TV shows and people to discover. Explore
                  now.
               </span>
               <div className="search">
                  <input
                     type="text"
                     placeholder="Search for a movie or tv show..."
                  />
                  <button>Search</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HeroBanner;
