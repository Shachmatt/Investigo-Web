/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Investigo brand palette (from the app's colorful.js)
        primary: '#850f8d',
        secondary: '#c738bd',
        tertiary: '#e49bff',
        lilac: '#f2d2fe',
        butter: '#f8f9d7',
        ink: '#36064d',
        bull: '#7ab6ff',
        bear: '#ff9696',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      fontWeight: {
        500: '500',
        600: '600',
        700: '700',
      },
      maxWidth: {
        content: '1180px',
      },
      keyframes: {
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        'gradient-pan': 'gradient-pan 8s ease infinite',
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
