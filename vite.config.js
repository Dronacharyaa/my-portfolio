import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // (or whatever plugin you are using)

export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/', // <-- Add this line (e.g., '/my-portfolio/')
})
