const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx'),
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'babel-loader',
                }, {
                    loader: 'ts-loader',
                    options: {
                        configFile: path.resolve(__dirname, 'tsconfig.json'),
                        compilerOptions: {
                            incremental: true,
                        },
                    },
                }],
                exclude: '/node_modules/',
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'css/index.css',
        }),
    ],
    devtool: 'inline-source-map',
};
