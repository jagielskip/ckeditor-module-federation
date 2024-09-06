import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import ckeditor5 from "@ckeditor/vite-plugin-ckeditor5";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ckeditor5({ theme: "lark" }),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button",
        "./HtmlEditor": "./src/components/HtmlEditor",
        "./HtmlEditorCustomElement": "./src/components/HtmlEditorCustomElement",
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
