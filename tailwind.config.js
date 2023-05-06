/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                pleno: {
                    white: {
                        700: "#B5B5B5",
                    },
                    primary: {
                        500: "#5EA09F",
                    },
                    stroke: {
                        neutral: {
                            500: "#454754",
                        },
                    },
                },
            },
        },
    },
    plugins: [],
};
