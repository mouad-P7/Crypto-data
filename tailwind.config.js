/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        'sm': '450px',
        'md': '800px', 
        'lg': '1000px', 
        'xl': '1280px',
      },
      colors: {
        'white': 'hsl(var(--white) / <alpha-value>)',
        'hover-white': 'hsl(var(--hover-white) / <alpha-value>)',
        'blue': 'hsl(var(--blue) / <alpha-value>)',
        'hover-blue': 'hsl(var(--hover-blue) / <alpha-value>)',
        'black': 'hsl(var(--black) / <alpha-value>)',
        'green': 'hsl(var(--green) / <alpha-value>)',
        'red': 'hsl(var(--red) / <alpha-value>)',
        'gray': 'hsl(var(--gray) / <alpha-value>)',
        'textGray': 'hsl(var(--textGray) / <alpha-value>)',
        'gray-2': 'hsl(var(--gray-2) / <alpha-value>)',
        'gray-3': 'hsl(var(--gray-3) / <alpha-value>)',
        'gray-4': 'hsl(var(--gray-4) / <alpha-value>)',
        'hover-gray': 'hsl(var(--hover-gray) / <alpha-value>)',
        'light-gray': 'hsl(var(--light-gray) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
