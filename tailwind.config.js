/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "*.html"],
    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern': "url('/src/assets/hero-pattern.png')"
            },
        },
    },
    plugins: [],
};
