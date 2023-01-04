/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            height: {
                slider: 'calc(100vh - 80px)',
                product: 'calc(100vh - 160px)'
            },
            translate: {
                0: '0vw',
                100: '100vw',
                200: '200vw',
            }
        },
    },
    safelist: [
        '-translate-x-0',
        '-translate-x-100',
        '-translate-x-200',
    ],
    plugins: [],
}
