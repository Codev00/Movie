export type genreType = {
   id: number;
   name: string;
};
export type productionCompaniesType = {
   id: number;
   logo_path: string;
   name: string;
   origin_country: string;
};

export type productionCountriesType = {
   id: number;
   name: string;
};

export type spokenLanguagesType = {
   english_name: string;
   iso_639_1: string;
   name: string;
};

export type castType = {
   adult: boolean;
   gender: number;
   id: number;
   known_for_department: string;
   name: string;
   original_name: string;
   popularity: number;
   profile_path: string;
   cast_id: number;
   character: string;
   credit_id: string;
   order: number;
};

export type crewType = {
   adult: boolean;
   gender: number;
   id: number;
   known_for_department: string;
   name: string;
   original_name: string;
   popularity: number;
   profile_path: string;
   credit_id: string;
   department: string;
   job: string;
};

export type videoResultType = {
   iso_639_1: string;
   iso_3166_1: string;
   name: string;
   key: string;
   site: string;
   size: number;
   type: string;
   official: boolean;
   published_at: string;
   id: string;
};

export type recommendResultType = {
   adult: boolean;
   backdrop_path: string;
   id: number;
   title: string;
   original_language: string;
   original_title: string;
   overview: string;
   poster_path: string;
   media_type: string;
   genre_ids: number[];
   popularity: number;
   release_date: string;
   video: boolean;
   vote_average: number;
   vote_count: number;
};

export type imageType = {
   aspect_ratio: number;
   height: number;
   iso_639_1: null;
   file_path: string;
   vote_average: number;
   vote_count: number;
   width: number;
};
