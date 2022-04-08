module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['canada-type-gibson', 'sans-serif'],
      },
      colors: {
        'spLightGrey': '#f6f6f6',
        'spBlueGrey': '#1f282d',
        'spLightBlue': '#78afb4',
        'spBrown': '#9f9173',
        'spGreen': '#7cc274',
        'spGold': '#c4aa3d',
        'spRed': '#ce4651'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
