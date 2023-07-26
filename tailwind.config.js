/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      container:{
        center:true,
      },
      fontFamily:{
        kumbh:['Kumbh Sans','sans-serif']
      },
      colors:{
        primary: "#F85559",
        'primary-hover': "#fb4346",
        secondary:"#001789",
      }
    },
  },
  plugins: [],
}

