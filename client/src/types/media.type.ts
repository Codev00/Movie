import {
   castType,
   crewType,
   genreType,
   imageType,
   productionCompaniesType,
   productionCountriesType,
   recommendResultType,
   spokenLanguagesType,
   videoResultType,
} from "./all.type";

export type MediaTypeList = {
   adult: boolean;
   backdrop_path: string;
   genre_ids: number[];
   id: number;
   original_language: string;
   original_title: string;
   overview: string;
   popularity: number;
   poster_path: string;
   release_date: string;
   title: string;
   name: string;
   video: boolean;
   vote_average: number;
   vote_count: number;
};

export type MediaTypeDetail = {
   adult: boolean;
   backdrop_path: string;
   belongs_to_collection: {
      id: number;
      name: string;
      poster_path: string;
      backdrop_path: string;
   };
   budget: number;
   genres: genreType[];
   homepage: string;
   id: number;
   imdb_id: string;
   original_language: string;
   original_title: string;
   overview: string;
   popularity: number;
   poster_path: string;
   production_companies: productionCompaniesType[];
   production_countries: productionCountriesType[];
   release_date: string;
   revenue: number;
   runtime: number;
   spoken_languages: spokenLanguagesType[];
   status: string;
   tagline: string;
   title: string;
   video: boolean;
   vote_average: number;
   vote_count: number;
   credits: {
      id: number;
      cast: castType[];
      crew: crewType[];
   };
   videos: {
      id: number;
      results: videoResultType[];
   };
   recommend: {
      page: number;
      results: recommendResultType[];
      total_pages: number;
      total_results: number;
   };
   images: {
      id: number;
      backdrops: imageType[];
      logos: imageType[];
      posters: imageType[];
   };
   review: [];
};
