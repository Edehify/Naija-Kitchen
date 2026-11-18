// webpack.config.js
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: "./dist",
    port: 8080,
    open: true,
  },

  module : {
    
    rules : [
        {
            test : /\.css$/i, 
            use : ["style-loader", "css-loader"]  
        },
        {
            test: /\.(png|jpg|jpeg)$/i,
            type: "asset/resource"
        }
    ]  
  },

  plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],

    devtool: "source-map",
};
