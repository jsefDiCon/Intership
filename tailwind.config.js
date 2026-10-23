export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D0E4B',
          deep: '#07082F',
          soft: '#1A1C6B',
        },
        cyan: {
          DEFAULT: '#5CE1E6',
          strong: '#2FC9CF',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
    },
  },
}
