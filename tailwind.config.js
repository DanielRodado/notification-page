/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.html", "./src/**/*.{js,css}"],
    theme: {
        colors: {
            red: "hsl(1, 90%, 64%)",
            blue: "hsl(219, 85%, 26%)",
            white: "hsl(0, 0%, 100%)",
            "grayish-blue-very-light": "hsl(210, 60%, 98%)",
            "grayish-blue-light": {
                1: "hsl(211, 68%, 94%)",
                2: "hsl(205, 33%, 90%)",
            },
            "grayish-blue": "hsl(219, 14%, 63%)",
            "grayish-blue-dark": "hsl(219, 12%, 42%)",
            "blue-very-dark": "hsl(224, 21%, 14%)",
        },
        extend: {
            fontFamily: {
                "Plus-Jakarta-Sans": ["Plus Jakarta Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
};
