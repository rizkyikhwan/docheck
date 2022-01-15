module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '15px',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
    },
    extend: {
      fontFamily: {
        Saira: ["Saira", "sans-serif"],
        Ubuntu: ["Ubuntu", "sans-serif"]
       },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
