/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
      "heading": ["32px", "35.2px"],
      "nav-text": ["16px", "24px"]
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#78350F",
        "secondary": "#0F172A",
        "white-200": "#E2E8F0",
        "purple-900": "#3c2c5b",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",

      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
        'container': '0 0 10px 0 #00000012, 0 20px 25px -5px #0000001A',
        'box': '0px 0px 15px 0px #00000012, 0px 25px 50px -12px #00000040'
      },
      backgroundImage: {
        card: "url('assets/images/thumbnail-background.svg')",
      },
      clipPath: {
        triangle: 'polygon(0 0, 0 100%, 100% 100%)',
      },
      clipPath2: {
        'polygon': 'polygon(0 0, 0 100%, 100% 100%)'
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [

  ],
};
