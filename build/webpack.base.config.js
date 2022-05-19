// const HtmlWebpackPlugin = require('html-webpack-plugin')
const  { VueLoaderPlugin } = require('vue-loader')
// fork-ts-checker-webpack-plugin 类型检查
// awesome-typescript-loader 和ts-loader同类只是内部集成了类型检查 并可以在独立进程中进行的
// babel
module.exports = {
    // entry: './src/index.ts',
    output: {
        filename: 'employee-query.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', 'vue'],
        alias: {
            vue: 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                        transpileOnly: true // 快速构建不检查类型
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: './src/tpl/index.html'
        // }),
        new VueLoaderPlugin() 
    ],
    devtool: 'hidden-source-map'
}
