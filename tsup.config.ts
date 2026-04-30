import { sassPlugin } from 'esbuild-sass-plugin'
import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  esbuildPlugins: [sassPlugin()],
  external: ['react', 'react-dom'],
  format: ['esm', 'cjs'],
  injectStyle: true,
})