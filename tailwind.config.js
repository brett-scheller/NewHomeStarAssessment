module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray-1': '#F0F3F7',
        'gray-2': '#DEE1E6',
        'gray-3': '#A7AABE',
        'gray-4': '#222836',
        'yellow-1': '#FFD331',
      },
    },
  },
  variants: {
    extend: {
      display: ['hover', 'group-hover'],
    },
  },
  plugins: [],
};
