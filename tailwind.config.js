/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1150px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      // Warna utama pink
      'pink': {
        50: '#FFF0F6',
        100: '#FFD6E7',
        200: '#FFADD2',
        300: '#FF85C0',
        400: '#FF5CAD',
        500: '#FF3399', // Warna brand utama
        600: '#E62E88',
        700: '#CC2977',
        800: '#B32466',
        900: '#991F55',
      },
      'lightpink': '#FFE5F1',
      'darkpink': '#CC2977',
      'softpink': '#FFF0F6',
      'blush': '#FF85C0',
      // Warna pendukung
      'lavender': '#E6E6FA',
      'peach': '#FFDAB9',
      'cream': '#FFFDD0',
      // Mempertahankan beberapa warna utility
      'grey': '#909090',
      'lightgrey': '#F4F5F6',
      'darkgrey': '#747474',
      'gold': '#FAAF38',
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
      '65xl': ['65px', { lineHeight: '1' }],
      '80xl': ['80px', { lineHeight: '6rem' }],
    },
    
    extend: {
      backgroundImage: {
        'bliss-pattern': "url('/images/bg-pattern.png')",
      },
    },
  },
  plugins: [],
}