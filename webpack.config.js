const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode:  "development",
    entry: "./src/scripts/app.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins : [
        new CopyPlugin({
            patterns: [
                { 
                    from: 'images', 
                    to: 'images',
                    context: 'src/',
                    flatten: true
                },
                { 
                    from: 'fonts', 
                    to: 'fonts',
                    context: 'src/',
                }
            ],
        }),
    ]
}