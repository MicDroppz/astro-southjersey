/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brandYellow: '#FFDE59',
        brandTeal: '#00C2CB',
        brandPink: '#FF66C4',
        brandGreen: '#7ED957',
        brandOrange: '#FF914D',
        brandPurple: '#8C52FF',
        brandRed: '#FF3333',
      },
      fontFamily: {
        bangers: ['Bangers', 'cursive'],
        fredoka: ['Fredoka', 'sans-serif'],
        sans: ['Quicksand', 'sans-serif'],
      },
      boxShadow: {
        comic: '4px 4px 0px 0px #000',
        'comic-lg': '8px 8px 0px 0px #000',
        'comic-sm': '2px 2px 0px 0px #000',
      }
    },
  },
  plugins: [],
};