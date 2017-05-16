var webpack = require('webpack');
var config = {
    entry: [
        "./src/app.jsx"
    ],
    output: {
        path: __dirname,
        filename: "build/bundle.js",
        publicPath: "/build"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', 
                query: { 
                    plugins: ["transform-runtime"],
                    presets: ['es2015', 'stage-0'] 
                } 
            }, //同时支持es6 react
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loader: "style!css!sass" }, //sass加载器
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx','.json']
    },
    plugins: [
        //new webpack.NoErrorsPlugin(), //允许错误不打断程序
        new webpack.HotModuleReplacementPlugin(), //webpack热替换插件
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    devtool: 'source-map'
};
module.exports = config;