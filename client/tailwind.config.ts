/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./node_modules/flowbite-react/**/*.js",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
      },
      container: {
         center: true,
         padding: {
            sm: "2rem",
            md: "2rem",
            lg: "2rem",
            xl: "10rem",
         },
      },
   },
   daisyui: {
      themes: ["light", "dark", "night"],
   },
   plugins: [nextui(), require("tailwindcss-animated"), require("daisyui")],
};
