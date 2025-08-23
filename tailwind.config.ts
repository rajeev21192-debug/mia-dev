import type { Config } from "tailwindcss"
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#f0c987", 50:"#FFF8EC", 100:"#FBEED8", 200:"#F6DFB6", 300:"#F0C987", 400:"#E2AB56", 500:"#C78724", 600:"#A66917", 700:"#7F4E0F", 800:"#5C390B", 900:"#3D2607" },
        neutral: { 50:"#FAFAFA", 100:"#F5F5F5", 200:"#E5E5E5", 300:"#D4D4D4", 400:"#A3A3A3", 500:"#737373", 600:"#525252", 700:"#404040", 800:"#262626", 900:"#171717" }
      },
      borderRadius: { "2xl":"1.25rem" },
      boxShadow: { soft: "0 10px 20px rgba(0,0,0,0.06)" }
    }
  },
  plugins: []
}
export default config
