import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { URL, fileURLToPath } from "node:url";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig(configEnv => {
  const root = process.cwd();
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as unknown as Env.ImportMeta;
  return {
    root,
    plugins: [
      vue(),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false // css in js
          })
        ]
      }),
      eslintPlugin({
        cache: false,
        include: ["src/**/*.vue", "src/**/*.ts", "src/**/*.tsx", "vite-config/**/*.ts"]
      })
    ],
    resolve: {
      alias: {
        "~": fileURLToPath(new URL("./", import.meta.url)),
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    },
    server: {
      host: "0.0.0.0",
      port: 5174,
      cors: true,
      proxy: {
        "/api": {
          target: `http://${viteEnv.VITE_LIGHT_BACKEND_ADDR}`, //`http://10.1.10.8:8099`,
          ws: false,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, "")
        }
        // "/mgr/v1": {
        //   target: `http://${viteEnv.VITE_MGR_BACKEND_ADDR}`,
        //   ws: false,
        //   changeOrigin: true
        // },
        // "/vnf": {
        //   target: `http://${viteEnv.VITE_KAPOK_BACKEND_ADDR}`,
        //   ws: false,
        //   changeOrigin: true
        // }
      }
    }
  };
});
