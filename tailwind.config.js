/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutral-50': '#F9F9F9',
        'neutral-1000': '#000',
        'neutral-200': '#E4E4E4',
        'neutral-500': '#737373',
        'neutral-700': '#404040',
        'neutral-400': '#A2A2A2',
        'neutral-600': '#525252',
        'neutral-800': '#262626',
        'twitter—blue': '#1D9BF0',
        'twitter—blue-hover': '#1871CA',
        'twitter—blue-disabled': '#1E5D87',

        'stroke': '#546A7A',
        'searchbar-fill': '#212327'
      },
      boxShadow: {
        'button': '0px 8px 16px 0px rgba(0, 0, 0, 0.25)'
      },
      backdropBlur: {
        'button': '23.668209075927734px',
      },
      borderRadius: {
        'create': '4.0625rem',
        'post': '624.9375rem',
        'follow': '1.875rem',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      }, fontSize: {
        md: '0.9375rem',
      }
    },
  },
  plugins: [],
}

