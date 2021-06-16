const path = require('path'); 
const { webpack } = require('webpack');

module.exports = {
    name : 'wordrelay-setting',
    mode : 'development',
    devtool : 'eval',
    resolve : {
        extensions: ['.js', '.jsx'],
    },
    entry : {
        app : ['./client'],

    }, // 입력
    module : {
        rules: [{
            test : /\.jsx?/,
            loader : 'babel-loader',
            options : {
                presets : ['@babel/preset-env','@babel/preset-react'],
            },
        }],
    },
    output : {
        path : path.join(__dirname, 'dist'),
        filename : 'app.js',
    }, //출력

}