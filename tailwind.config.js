/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        bgMove: {
          "0%, 100%": {
            transform: "translateY(0)",
            scale: "1",
          },
          "50%": { transform: "translateY(20%)", scale: "1.2" },
        },
      },
      animation: {
        floatSlow: "float 8s ease-in-out infinite",
        floatFast: "float 3s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
        bgMove: "bgMove 60s linear infinite",
      },
      maxWidth: {
        "7xl": "1320px",
        "8xl": "1820px",
      },
      fontFamily: {
        sans: ["AvenirNext", "sans-serif"],
      },
      colors: {
        n1: "#1D3557",
        n2: "#2EC4B6",
        ns1: "#ADB5BD",
        ns2: "#FFFFFF",
        nv1: "#FF6F59",
        nv2: "#38B000",
        dark: "#181818",
        light: "#f2f2f2",
      },
    },
  },
  plugins: [],
};
