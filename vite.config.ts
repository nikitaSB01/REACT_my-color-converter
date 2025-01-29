import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/REACT_my-color-converter/", // Замените my-color-converter на имя вашего репозитория
});
