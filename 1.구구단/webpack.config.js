const path = require('path');

module.exports = {
    mode: 'development',
    devtool : 'eval',
    entry : {
        app: './client',
    },
    module : {
        rules :[{
            test : /\.jsx?$/,
            loader : 'bable-loder',
            options : {
                presets : ['@babel/preset-env', '@babel/preset-react'],
                plugins : [],
            },
        }],
    },
    output : {
        fliename : 'app.js',
        path : path.join(__dirname, 'dist'),
    },
}