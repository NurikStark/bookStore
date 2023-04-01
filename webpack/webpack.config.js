
const path = require('path');

module.exports = {
    mode:'production',
    entry:{  filename: path.resolve(__dirname,'src/index.js')},
    output:{
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name][ext]'
    },
    performance:{
        hints:false,
        maxAssetSize: 512000,
        maxEntrypointSize: 512000
    },
    devServer: {
        port: 3001,
        hot: true,
        static:{
            directory: path.join(__dirname, 'dist')
        }
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test:/\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/\.(png|svg|jpeg|jpg)$/i,
                type: 'asset/resource'
            }
        ]
    }
};