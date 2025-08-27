import type { Config } from 'tailwindcss'
const config: Config={content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],theme:{extend:{borderRadius:{'2xl':'1.25rem'},boxShadow:{soft:'0 10px 20px rgba(0,0,0,0.06)'}}},plugins:[]};export default config
