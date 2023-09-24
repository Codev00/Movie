import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
   genres: {},
};

const homeState = createSlice({
   name: "home",
   initialState,
   reducers: {
      setGenres: (state, action) => {
         state.genres = action.payload;
      },
   },
});

export const { setGenres } = homeState.actions;
export const listGenres = (state: RootState) => state.home.genres;
const homeReducer = homeState.reducer;
export default homeReducer;
