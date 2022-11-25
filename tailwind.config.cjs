/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#003B71",
                secondary: "#0058A7",
                category: "#FFB703",
                dark: "#0f172a",
            },
        },
        container: {
            center: true,
            padding: "1rem",
        },
    },
    plugins: [],
};
