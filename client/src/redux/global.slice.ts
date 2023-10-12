import { createSlice } from "@reduxjs/toolkit";

interface GlobalSlice {
   isActive: string;
}

const initialState: GlobalSlice = {
   isActive: "",
};

const globalSlice = createSlice({
   name: "global",
   initialState,
   reducers: {
      setActive: (state, action) => {
         state.isActive = action.payload;
      },
   },
});

export const { setActive } = globalSlice.actions;
const globalReducer = globalSlice.reducer;
export default globalReducer;
