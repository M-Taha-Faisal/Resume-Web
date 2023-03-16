
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#023047',
        lightBlue: '#8ecae6',
        darkblue:'#01baef',
        green:'#00ff87',
        violet:'#48bfe3',
        light:'#4cc9f0',
        gradient:'bg-gradient-to-r from-green to-blue'
      },
     
      fontFamily:{
        Roboto:['Roboto Slab']
      },
      flexGrow: {
        '3': 3,
      }
    },
  },
  plugins: [],
}
