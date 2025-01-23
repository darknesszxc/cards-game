/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      screens: {
        mobile: '320px',  // для мобильных устройств, от 320px
        'mobile-max': { max: '791px' },  // до 791px
        tablet: '792px',  // для планшетов, от 792px
        'tablet-max': { max: '1279px' },  // до 1279px
        desktop: '1280px',  // для десктопов, от 1280px
      },
    },
    
  },
  
  plugins: [],
}