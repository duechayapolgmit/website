/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            backgroundImage: theme => ({
                "background-dev": "url('/backgrounds/dev.png')",
                "background-mccliveshow": "url('/backgrounds/mccliveshow.png')"
            })
        }
    }
}