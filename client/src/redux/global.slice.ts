import { createSlice } from "@reduxjs/toolkit";

interface GlobalSlice {
   isActive: string;
   language: "en-US" | "vi-VN";
}

const initialState: GlobalSlice = {
   isActive: "",
   language: "en-US",
};

const globalSlice = createSlice({
   name: "global",
   initialState,
   reducers: {
      setActive: (state, action) => {
         state.isActive = action.payload;
      },
      setLanguage: (state, action) => {
         state.language = action.payload;
      },
   },
});

export const { setActive, setLanguage } = globalSlice.actions;
const globalReducer = globalSlice.reducer;
export default globalReducer;
