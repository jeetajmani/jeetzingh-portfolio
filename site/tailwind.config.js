/** @type {import('tailwindcss').Config} */
export const content = [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
    extend: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
        },
    },
};
export const plugins = [];