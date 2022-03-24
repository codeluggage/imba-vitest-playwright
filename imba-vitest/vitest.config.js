/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    // include: ['dist/**/*.{test,spec}.imba', ]
    include: ['test/**/*.{test,spec}.js']
  }
})
