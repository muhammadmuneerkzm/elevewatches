/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    
    colors: {
      ...colors,
      'primary': {
        '50': '#E3F8FF',
        '100': '#B3ECFF',
        '200': '#81DEFD',
        '300': '#5ED0FA',
        '400': '#40C3F7',
        '500': '#2BB0ED',
        '600': '#1992D4',
        '700': '#127FBF',
        '800': '#0B69A3',
        '900': '#045386',
        '950': '#003366'
      },
      'secondary': {
        '50': '#EBF4FF',
        '100': '#C3DAFE',
        '200': '#A3BFFA',
        '300': '#7F9CF5',
        '400': '#667EEA',
        '500': '#5A67D8',
        '600': '#4C51BF',
        '700': '#434190',
        '800': '#373175',
        '900': '#312E58',
        '950': '#1F1D3F'
      },
    },
  },
  plugins: [],
};

console.log(colors.blue)

// /** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");

// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//     colors: {
//       ...colors,
//       primary: {
//         DEFAULT: '#2C3E50', // Dark Blue
//       },
//       secondary: {
//         DEFAULT: '#36454F', // Charcoal
//       },
//       // ... other color customizations
//     },
//   },
//   plugins: [],
// };