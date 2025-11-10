/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", 
    ],
    theme: {
      extend: {
        colors: {
          'brand-primary': '#6b7e22',
          'brand-hover': '#6b7e22cc',
        },
      },
    },
    plugins: [],
  };
  