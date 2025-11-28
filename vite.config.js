import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  base: '/dastres/',
})
