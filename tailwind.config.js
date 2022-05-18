module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      'animation': {
        'fade': 'fade 0.5s ease-out backwards',
      },
      'keyframes': {
        'fade': {
          '0%': { 'opacity': '0' }
        }
      }
    }
  },
  plugins: [],
}
