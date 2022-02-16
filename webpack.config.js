// import
const path= require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export
module.exports = {
    //파일을 읽어들이기 시작하는 진입점 설정
    //parcel index.html
    //webpack은 js파일로 진입점 설정
    //entry 여러가지 경로로 설정 가능
    entry:'./js/main.js',
    

    //결과물(번들)을 반환하는 설정 
    output:{
        // path:path.resolve(__dirname, 'dist'),//node.js 필요하는 절대경로 필요로함
        // filename:'main.js',
        clean:true 
    },
    
    module: {
        rules: [
            {
                test:/\.s?css$/ ,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.js$/,
                use:[
                    'babel-loader'
                ]
            }
        ]
    },


    // 번들링 후 결과물의 처리 방식 다양한 플러그인들 설정
    plugins:[
        new HtmlPlugin({
            template:'./index.html'
        }),
        new CopyPlugin({
            patterns: [
                {from : 'static' }
            ]
        })
    ],

    devServer: {
        host:'localhost'
    }
}