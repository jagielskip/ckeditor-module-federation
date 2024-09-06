import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import ckeditor5 from "@ckeditor/vite-plugin-ckeditor5";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ckeditor5({ theme: "lark" }),
    federation({
      name: "app",
      remotes: {
        remoteApp: "http://localhost:5001/assets/remoteEntry.js",
      },
      shared: ["@ckeditor/ckeditor5-react"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
