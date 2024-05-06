/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx,html}",
  './pages/*.{html,js,ts,jsx}',
'./**/Index.html' ],
  theme: {
    extend: {
      width:{
        '200%':'100rem',
        '3xl':'768px',
        '1024l':'1024px',
        '1280l':'1280px',
        '1536':'1536px',

      },
      height:{
        '2xl':'667px',
        '3xl':'768px',
        '4xl':'1024px',
        '5xl':'1280px',
      },
      top:{
        '110':'100px',

      },
      backgroundImage: {
        'path': "url('../../wwwroot/Imgs/Path.png')",
      }
    },
  },
  plugins: [],
}

