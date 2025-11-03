/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7E3FF2',
          50: '#F3EFFF',
          100: '#E8DFFF',
          200: '#D1BFFF',
          300: '#BA9FFF',
          400: '#A37FFF',
          500: '#7E3FF2',
          600: '#6432C2',
          700: '#4A2591',
          800: '#301860',
          900: '#160B30',
        },
        accent: {
          DEFAULT: '#FFD740',
          50: '#FFFDF0',
          100: '#FFFBE0',
          200: '#FFF7C2',
          300: '#FFF3A3',
          400: '#FFEF85',
          500: '#FFD740',
          600: '#FFCA0D',
          700: '#D4A600',
          800: '#A18200',
          900: '#6E5E00',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}