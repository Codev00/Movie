import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
   isLoggedIn: boolean;
   user: string;
   favorites: {}[];
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
   },
});

export const { login, logout, setUser } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
