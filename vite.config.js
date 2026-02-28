import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: '/homepage_edu/', // 这个相当于是全部资源的 base 路径，必须与 GitHub 仓库名称一致
})
