/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F5ECD7',
          DEFAULT: '#C9A96E',
          dark: '#A8824A',
        },
        cream: '#FAFAF8',
        forest: '#1A2E1A',
        wood: '#3B2A1A',
        charcoal: '#2C2C2C',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1A2E1A 0%, #3B2A1A 50%, #1A2E1A 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C9A96E 0%, #F5ECD7 50%, #C9A96E 100%)',
        'section-gradient': 'linear-gradient(180deg, #FAFAF8 0%, #F5ECD7 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}

