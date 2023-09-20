/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            textColor: {
                brand: "#46EBA5",
                primary: "#FFFFFF",
            },
            colors: {
                brand: {
                    DEFAULT: "#46EBA5",
                    50: "#ECFDF6",
                    100: "#D9FBED",
                    200: "#B4F7DB",
                    300: "#90F3C9",
                    400: "#6BEFB7",
                    500: "#46EBA5",
                    600: "#18E18C",
                    700: "#13AE6C",
                    800: "#0D7B4D",
                    900: "#08492D",
                    950: "#052F1D",
                },
                background: "#000000",
                backgroundSecondary: "#1E1E21",
                border: "#000000",
            },
            borderRadius: {
                normal: "10px",
            },
            fontFamily: {
                poppinsBold: ["poppinsBold", ...defaultTheme.fontFamily.sans],
                poppinsSemibold: ["poppinsSemibold", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require("tailwind-children")],
    "tailwindCSS.includeLanguages": {
        Svelte: "html",
    },
};
