import privateClient from "./config/private.client";
import publicClient from "./config/public.client";

const userEndpoints = {
   signin: "user/signin",
   signup: "user/signup",
   getInfo: "user/info",
   updatePassword: "user/update-password",
   getFavorites: "user/favorites",
   addFavorite: "user/favorites",
};

const userApi = {
   signin: async ({
      username,
      password,
   }: {
      username: string;
      password: string;
   }) => {
      try {
         const res = await publicClient.post(userEndpoints.signin, {
            username,
            password,
         });
         return { res };
      } catch (error) {
         return { error };
      }
   },
   signup: async ({
      username,
      password,
      confirmPassword,
      displayName,
   }: {
      username: string;
      password: string;
      confirmPassword: string;
      displayName: string;
   }) => {
      try {
         const res = await publicClient.post(userEndpoints.signup, {
            username,
            password,
            confirmPassword,
            displayName,
         });
         return { res };
      } catch (error) {
         return { error };
      }
   },
   getInfo: async () => {
      try {
         const res = await privateClient.get(userEndpoints.getInfo);
      } catch (error) {
         return { error };
      }
   },
   upddatePassword: async ({
      password,
      newPassword,
      confirmNewPassword,
   }: {
      password: string;
      newPassword: string;
      confirmNewPassword: string;
   }) => {
      try {
         const res = await privateClient.put(userEndpoints.updatePassword, {
            password,
            newPassword,
            confirmNewPassword,
         });
         return { res };
      } catch (error) {
         return { error };
      }
   },
};

export default userApi;
