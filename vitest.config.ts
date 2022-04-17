import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    include: ['_dist_esm/tests/vitest/**/*.{test,spec}.js']
  }
})
