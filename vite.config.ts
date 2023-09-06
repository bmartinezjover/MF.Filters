import { fileURLToPath, URL } from "node:url";
import federation from '@originjs/vite-plugin-federation'
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslint from "vite-plugin-eslint";
import { sharedExposed, exposes } from './exposesMaps'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint({
      include: ["src/**/*.ts", "src/**/*.vue"],
    }),
    federation({
      name: 'myroom',
      filename: 'myroom.js',
      exposes,
      shared: {
        ...sharedExposed,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    assetsInlineLimit: 40960,
    target: "esnext",
    minify: true,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        minifyInternalExports: true,
      },
    },
  },
});
