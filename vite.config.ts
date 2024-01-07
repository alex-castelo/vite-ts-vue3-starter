/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    mockReset: true,
    environment: 'jsdom',
    setupFiles: ['./tests/vitest-setup.ts'],
  },
})
