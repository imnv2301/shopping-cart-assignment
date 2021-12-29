const path = require('path');
const fs  = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {               
    app: './src/js/app.js',
    cart: './src/js/cart.js',
    index: './src/js/index.js',
    utility:'./src/js/utility.js',
    appCss: './src/scss/app.scss',
    asideBar: './src/scss/_asideBar.scss',
    button: './src/scss/_button.scss',
    carousel: './src/scss/_carousel.scss',
    cart: './src/scss/_cart.scss',
    flex: './src/scss/_flex.scss',
    header: './src/scss/_header.scss',
    home: './src/scss/_home.scss',
    login: './src/scss/_login.scss',
    main: './src/scss/_main.scss',
    partials: './src/scss/_partials.scss',
    products: './src/scss/_products.scss',
    vars: './src/scss/_vars.scss'
      },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),                
    },
    
    //loader
    module: {
        //apply rules
        rules: [
            {
                test: /\.(s(a|c)ss)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: 'css/[name].css',
                    }
                  },
                  {
                    loader: 'style-loader'
                  },
                  // {
                  //   loader: 'extract-loader'
                  // },
                  {
                    loader: 'css-loader',
                   
                  },
                  // {
                  //   loader: 'postcss-loader'
                  // },
                  {
                    loader: 'sass-loader'
                  }
                ]
                // use: ['style-loader','css-loader', 'sass-loader']
             },
             {
              test: /\.js$/,
              exclude: /node_modules/,
              use: ['babel-loader'],
            }            
        ]
    },

    plugins : [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            filename: 'index.html',
            chunks:['main']
          }),
          
          new HtmlWebpackPlugin({
            template: './src/login.html',
            inject: true,
            filename: 'login.html',
            chunks:['login']
          }),
          new HtmlWebpackPlugin({
            template: './src/register.html',
            inject: true,
            filename: 'register.html',
            chunks:['register']
          }),
          new HtmlWebpackPlugin({
            template: './src/products.html',
            inject: true,
            filename: 'products.html',
            chunks:['products']
          })
    ],

    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,     
        port : 5500   
    }
}
