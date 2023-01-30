/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*{html,js}"],
  theme: {
    extend: {
      colors: {
        black: '#171717',
        blueblack: ' #232532',
        orrange: '#E6533C',
        unknowColur : '#7A29DC',
        darkWhite : '#FAFAF9',
        lightBlack: '#303030',
        lightBlack2  : '#323443',
        gray : '#4F5261',
      },
    },
    fontFamily: {
      inter : ['Inter', 'sans-serif'],
      poppins : ['Poppins', 'sans-serif'],
    }
  },
  plugins: [require("daisyui")],  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "black",
  },

}
