const { Configuration } = require("webpack")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader/dist/index');
/**
 * @type {Configuration}  //配置智能提示}
 */
const config = {
  mode: "development",  // webpack模式
  entry: "./src/main.ts",  //配置入口
  stats: "errors-only",
  output: {
    filename: "[hash].js",
    path: path.resolve(__dirname, "dist"), // 出口
    clean: true, // 清除dist
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use:['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use:['style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          configFile: path.resolve(process.cwd(), "tsconfig.json"),
          appendTsSuffixTo: [/\.vue$/]
        }
      }
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
    extensions: [".ts", ".tsx", ".js", ".json", ".vue"]
  },
  devServer: {
    proxy:{},
    port: 9001,
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"  // html模板
    }),
    new VueLoaderPlugin()
  ],
}

module.exports = config