import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'public',
  base: 'react-resume',
  plugins: [react()],
})
