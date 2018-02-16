const path = require('path');
const webpack = require('webpack');
const StatsGraphPlugin = require('./StatsGraphPlugin');

module.exports = {
    entry: "./src/app.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: '/dist/'
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules:
        [
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }

       ]
        // loaders: [
        //     { test: /\.tsx?$/, loader: "ts-loader" },
        //     { test: /\.css$/,  loaders: ["style-loader","css-loader"]
        //       }
        // ]
        
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        publicPath: '/dist/',
        watchContentBase: false,
        hotOnly: true,
        overlay: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new StatsGraphPlugin()
    ]
    
}