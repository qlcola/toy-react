const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: "./index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [
                        [
                            "@babel/plugin-transform-react-jsx",
                            { pragma: "ToyReact.createElement" },
                        ],
                        ],
                    },
                },
            },
        ],
    },
    plugins: [ //数组：放着所有的webpack插件
        // 配置
       new HtmlWebpackPlugin({
         template: './index.html',
         filename: 'index.html'
       })
    ],
    mode: "development",
    optimization: { minimize: false },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3003,
        // hot: true
    }
}