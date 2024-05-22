/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", './dist/*.html'],
    theme: {
        extend: {
            fontFamily: {
                jakarta: ["Plus Jakarta Sans"],
                lalezar: ["Lalezar"],
            },
            colors: {
                "primary": "#762BEB",
                "primary-hover": "#6126BD",
                "black": "#020014",
                "gray": "#65636B",

            },
        },
        plugins: [],
    }
}
