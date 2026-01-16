import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050609", 
        surface: "#0F1115",    
        brand: "#F59E0B",      
        firoozei: "#00D4C5",   
        foreground: "#E5E5E5", 
        muted: "#A3A3A3",      
      },
      backgroundImage: {
        'alchemy': "linear-gradient(to top right, #F59E0B, #00D4C5)",
        'lantern-glow': "radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.06), transparent 70%)",
      },
    },
  },
  plugins: [],
};
export default config;