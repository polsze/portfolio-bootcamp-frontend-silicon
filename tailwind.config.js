/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)'],
        lobster: ['Lobster', 'cursive'],
        racing: ['Racing Sans One', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif']
      },
      colors: {
    dark: "#1b1b1b",
    light: "#f5f5f5",
    primary: "#B63E96", // 240,86,199
    primaryDark: "#58E6D9", // 80,230,217
      },
      keyframes: {
        flip: {
          '0%, 100%': { transform: 'rotateY(0)' },
          '50%': { transform: 'rotateX(180deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'animation-flip': 'flip 4s ease infinite',
      },
      backgroundImage: {
        "heroBg":"url(/images/profile/pablobarrios.webp)",
        "contactBg":"url(/images/profile/bgcode3.webp)",
        "cmBg":"url(/images/profile/bg-cm.png)",
        "cmBg2":"url(/images/profile/bg-cm2.png)"        
      },
    },
    screens:{
      "2xl": { max: "1535px" },
    // => @media (max-width: 1535px) { ... }

    "3xl": { max: "1300px" },
    // => @media (max-width: 1300px) { ... }

    xl: { max: "1279px" },
    // => @media (max-width: 1279px) { ... }

    lg: { max: "1023px" },
    // => @media (max-width: 1023px) { ... }

    md: { max: "767px" },
    // => @media (max-width: 767px) { ... }

    sm: { max: "639px" },
    // => @media (max-width: 639px) { ... }

    xs: { max: "479px" },
    // => @media (max-width: 479px) { ... }
    }
  },
  plugins: [],
};