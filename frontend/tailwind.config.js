/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cacs-navy': '#0B1F3A',
        'cacs-blue': '#123B68',
        'cacs-blue-light': '#1a4db5',
        'cacs-emerald': '#0F8B6D',
        'cacs-emerald-dark': '#0c6a53',
        'cacs-gold': '#C9A227',
        'cacs-gold-light': '#D4B32E',
        'cacs-pink': '#E8335F',
        'cacs-orange': '#F27B00',
        'cacs-cyan': '#01A1BC',
        'cacs-white': '#FFFFFF',
        'cacs-neutral': '#F5F7FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-cacs': 'linear-gradient(135deg, #0B1F3A 0%, #123B68 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
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
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
