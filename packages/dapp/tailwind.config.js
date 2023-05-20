/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#0061FF",

                    secondary: "#0044FF",

                    accent: "#e5ff68",

                    neutral: "#1D2B35",

                    "base-100": "#191E24",

                    "base-200": "#14181d",

                    info: "#0061FF",

                    success: "#2FBC34",

                    warning: "#FFC200",

                    error: "#D42620",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
