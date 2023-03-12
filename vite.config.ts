/// <reference types="vitest" />
import path from "node:path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";

export default defineConfig({
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
      vue: "@vue/compat"
    },
  },
  plugins: [
    Vue({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2
          }
        }
      }
    }),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages({ routeStyle: "nuxt" }),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: "jsdom",
  },
});
