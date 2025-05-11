import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['tests/**/*.test.{ts,mts,cts}'],
  },

  resolve: {
    alias: [
      { find: '~', replacement: path.resolve(__dirname, 'src') },
    ]
  },
  optimizeDeps: {
    esbuildOptions: {
      tsconfig: './tests/tsconfig.json',
    }
  },
})
