import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  outDir: 'dist',
  format: ['cjs'], // add 'esm' to generate ES Modules format output during build
  // dts: true, // to libs to generate .d.ts files alongside your compiled JavaScript
  sourcemap: true,
  skipNodeModulesBundle: true,
  clean: true,
});
