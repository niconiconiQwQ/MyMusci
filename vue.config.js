const { defineConfig } = require("@vue/cli-service");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    // 解决报错[BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.This is no longer the case. Verify if you need this module and configure a polyfill for it.]
    plugins: [new NodePolyfillPlugin()],
    // 解决报错(Module not found: Error: Can't resolve 'fs' in 'F:\Code_save\vscode_save\projects\MyMusic\webmusic\node_modules\destroy') 等很多文件
    resolve: {
      fallback: {
        fs: false,
      },
    },
  },
});
