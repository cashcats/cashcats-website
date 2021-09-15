module.exports = {
   mode: "jit",
   purge: ["./public/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '2rem'
    },
    fontFamily: {
      'sans': ['"Hind"', 'Helvetica', 'Arial', 'sans-serif'],
      'body': ['Helvetica', 'Arial', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
