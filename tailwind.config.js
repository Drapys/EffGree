/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx,html}",
  './pages/*.{html,js,ts,jsx}',
'./**/Index.html' ],
  theme: {
    extend: {
      width:{
        '200%':'100rem',
      },
      backgroundImage: {
        'path': "url('../../wwwroot/Imgs/Path.png')",
      }
    },
  },
  plugins: [],
}

