import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'

console.log(resolve('../'))

export default defineConfig({
  root: resolve('../'),
  // root: '../',
  plugins: [
    uni(),
  ],
  // optimizeDeps: {
  //   exclude: ['**']
  // },
  server: {
    watch: {
      ignored: ['']
    }
  },
})
