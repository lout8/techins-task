/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': "url('/img/bg.svg')",
        'dark-bg-image': "url('/img/dark-bg.svg')",
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(-25%)' },
          '50%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        'arrow': 'shake 1s infinite;',
      }
    },
    fontFamily: {
      'raleway': ['Raleway']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
