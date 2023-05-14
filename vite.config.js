import { defineConfig, loadEnv } from 'vite'
const { resolve } = require('path')
import createVitePlugins from './vite/plugins'
// https://vitejs.dev/config/
export default ({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  const { VITE_APP_BASE } = env
  return defineConfig({
    base: VITE_APP_BASE,
    server: {
      port: 2888,
      proxy: {
        '/api': {
          target: 'https://saber3.bladex.cn/api',
          // target: 'http://192.168.x.x',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
          // http://192.168.2.108:2888/api/blade-auth/oauth/token?grantType=captcha&tenantId=000000&username=admin&password=21232f297a57a5a743894a0e4a801fc3&type=account&scope=all
          // https://192.168.x.x/blade-auth/oauth/token?grantType=captcha&tenantId=000000&username=admin&password=21232f297a57a5a743894a0e4a801fc3&type=account&scope=all
        }
      },
    },
    resolve: {
      alias: {
        '~': resolve(__dirname, './'),
        "@": resolve(__dirname, "./src"),
        "components": resolve(__dirname, "./src/components"),
        "styles": resolve(__dirname, "./src/styles"),
        "utils": resolve(__dirname, "./src/utils"),
      }
    },
    plugins: createVitePlugins(env, command === 'build'),
  })
}
