/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm':'250px',
    
      'md': '720px', // => @media (min-width: 720px) { TABLET}

      'xl': '1024px', // => @media (min-width: 1024px) { LAPTOP }
      

      'xxl': '1281px',  // => @media (min-width: 1280px) { DESKTOP }
     
      'xxxl': '1800px', // => @media (min-width: 1280px) {Large DESKTOP }
      
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}