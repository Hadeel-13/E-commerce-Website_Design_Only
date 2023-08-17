/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    important: true,
    theme: {
        extend: {
            colors: {
                myYellow: "#efdcab",
                muff: "#BE6DB7",
                "myPink-500": "#FF9EAA",
                "myPink-300": "#FFD0D0",
                "myPink-200": "#ffd5e7",
                "myBlue-500": "#3AA6B9",
                "myBlue-400": "#7bccdc",
                "myBlue-300": "#C1ECE4",
            },
        },
    },
    plugins: [],
};
