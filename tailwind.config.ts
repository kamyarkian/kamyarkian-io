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
        concrete: { DEFAULT: '#34495E', dark: '#2C3E50', darker: '#1A252F' },
        ocean: { deep: '#1E3A5F', twilight: '#2E5A7D', mist: '#5B8BA8' },
        amber: { glow: '#FF6B35', warm: '#E8925C' },
        slate: { foundation: '#1A1D23' }
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'], 
        sans: ['Arial', 'sans-serif'],      
      },
    },
  },
  plugins: [],
};
export default config;