import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: "#4B5563",
                    dark: "#9CA3AF",
                },
                accent: {
                    light: "#F59E0B",
                    dark: "#FBBF24",
                },
                background: {
                    light: "#F3F4F6",
                    dark: "#111827",
                },
                text: {
                    light: "#1F2937",
                    dark: "#E5E7EB",
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
