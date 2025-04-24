/** @type {import('tailwindcss').Config} */


const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      
      // Si estás usando Material Tailwind, añade estas líneas:
      "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
      "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        backdropFilter: {
          'none': 'none',
          'blur': 'blur(20px)',
        },
        fontFamily: {
          roboto: ['var(--font-roboto)'],
        },
      },
    },
    plugins:  [
      require('tailwindcss-filters'), // Plugin necesario
    ],
  })