import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#212A3E",
          "secondary": "#F1F6F9",      
          "accent": "#394867",      
          "neutral": "#9BA4B5",      
          "base-100": "#ffffff",     
          "info": "#ffffff",
          "success": "#ffffff",       
          "warning": "#ffffff",      
          "error": "#ffffff",
        },
      },
    ],
  },
}
export default config
