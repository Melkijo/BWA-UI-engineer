/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                jakarta: ["Plus Jakarta Sans"],
                lalezar: ["Lalezar"],
            },
            colors: {
                "primary": "#762BEB",
                "black": "#020014",
                "gray": "#65636B",

            },
        },
        plugins: [],
    }
}
