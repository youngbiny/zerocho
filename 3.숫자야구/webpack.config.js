const path = require('path');
const refrsh = require('@pmmmwh/react-refresh-webpack-plugin');
module.exports ={
    name : 'wordrelay-setting',
    mode : 'development', //실서비스 : production
    devtool : 'eval' ,
    resolve : {
        extensions : ['.js','.jsx']
    },
    entry : {
        app : ['./client'],
        
    },  //입력

    module: {
        rules : [{
            test : /\.jsx?/,
            loader : 'babel-loader',
            options: {
                presets : ['@babel/preset-env', '@babel/preset-react']
            },
        }],
        plugins : [
            'react-refresh/babel'
        ],
    },
    plugins :[
        new refrsh(),
    ],

    output : {
        path : path.join(__dirname, 'dist'), //현재폴더
        filename : 'app.js',
        publicPath : '/dist/',
        
    },  //출력
    devserver:{
        publicPath : '/dist/',
        hot : true,
    },
};