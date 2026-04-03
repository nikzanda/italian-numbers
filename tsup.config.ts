// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm', 'iife'],
  globalName: 'italianNumbers',
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
});
