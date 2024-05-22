const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'BWA UI Engineer Test - Xinli',
            template: './src/templates/index.html',
            favicon: './src/assets/favicon/favicon.ico',
        }),
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'src/templates'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|svg|gif|jpg|jpeg)$/,
                type: 'asset/resource',

            },





        ],
    },
}
