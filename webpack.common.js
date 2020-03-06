const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const assetsDir = './assets';

module.exports = {
    entry: {
        app: [path.resolve(__dirname, './src/Game.js')],
        vendor: ['PIXI']
    },
    output: {
        path: path.resolve (__dirname, 'dist'),
        filename: 'js/[name].[contenthash].js',
        pathinfo: false
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                    enforce: true
                }
            }
        },
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            PIXI: path.resolve(__dirname, 'node_modules/pixi.js/dist/pixi.js'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: 'pre',
                loader: 'eslint-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist', { verbose: false }),
        new CopyWebpackPlugin([
                { from: `${assetsDir}/style.css` },
                { from: `${assetsDir}/img`, to: 'img', toType: 'dir' },
                { from: `${assetsDir}/fonts`, to: 'fonts', toType: 'dir' }
        ]),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, `${assetsDir}/index.html`),
            chunks: ['vendor', 'app'],
            chunksSortMode: 'manual'
        })
    ],
};
