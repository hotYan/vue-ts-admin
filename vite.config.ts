import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { URL, fileURLToPath } from 'node:url';
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import eslintPlugin from 'vite-plugin-eslint'

// const root = process.cwd();
// https://vitejs.dev/config/
export default defineConfig({
  // root,
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()]
    }),
    eslintPlugin({
      cache: false,
      include: ["src/**/*.vue", "src/**/*.ts", "src/**/*.tsx", "vite-config/**/*.ts"]
    }),
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
