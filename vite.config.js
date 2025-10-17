import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/maxapp/",
  plugins: [
    react(),
    {
      name: "add-query-to-assets",
      transformIndexHtml(html) {
        const timestamp = Date.now();
        return html.replace(
          /(src|href)="([^"]+\.(js|css))"/g,
          `$1="$2?v=${timestamp}"`
        );
      },
    },
  ],
});
