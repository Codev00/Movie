import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
   isLoggedIn: boolean;
   user: string;
   favorites: {};
}

const initialState = {
   isLoggedIn: false,
   user: "",
   favorites: [],
};

export const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      login: (state) => {
         state.isLoggedIn = true;
      },
      logout: (state) => {
         state.isLoggedIn = false;
      },
      setUser: (state, action) => {
         if (action.payload === null) {
            localStorage.removeItem("accessToken");
         } else {
            if (action.payload.token)
               localStorage.setItem("accessToken", action.payload.token);
         }
      },
      setListFavorite: (state, action) => {
         state.favorites = action.payload;
      },
      removeFavorite: (state, action) => {
         const { mediaId } = action.payload;
         state.favorites = [...state.favorites].filter(
            (e) => e.mediaId.toString() !== mediaId.toString()
         );
      },
      addfavorite: (state, action) => {
         state.favorites = [action.payload, ...state.favorites];
      },
   },
});

export const { login, logout, setUser } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
