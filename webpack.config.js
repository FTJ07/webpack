const path = require("path");
module.exports = {
    entry:  path.resolve(__dirname, './src/index.js'),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: ""
    },
    mode: "none",
    module: {
        rules: [
            {
                test:  /\.(jpg|jpeg)$/,
                type: 'asset/resource',
            }
        ]
    }
}
