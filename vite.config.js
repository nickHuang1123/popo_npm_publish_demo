import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    target: 'modules',
    //打包文件夾
    outDir: 'es',
    //壓縮
    minify: true,
    // css 分離
    // cssCodeSplit: true,
    rollupOptions: {
      // 忽略打包 vue、element-plus
      external: ['vue', 'element-plus'],
      input: ['index.js'],
      output: [
        {
          format: 'es',
          //.es.js => .js
          entryFileNames: '[name].js',
          // 目錄對齊
          preserveModules: true,
          exports: 'named',
          //打包根目錄
          dir: resolve(__dirname, './dist/es'),
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          //目錄對齊
          preserveModules: true,
          exports: 'named',
          //打包根目錄
          dir: resolve(__dirname, './dist/lib'),
        },
      ],
    },
    lib: {
      entry: './index.js',
      name: 'popo',
    },
  },
})