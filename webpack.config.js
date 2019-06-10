const path = require("path");

const entryPoint = path.join(__dirname, "./client/mainContainer.jsx");
const outputPoint = path.join(__dirname, "./public"); 

module.exports = {
  entry : {
    main : entryPoint
  },
  output : {
    filename : "bundle.js",
    path : outputPoint
  },
  module : {
    rules : [
      {
        test : /\.(js|jsx)$/,
        use : {
          loader : "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        }],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ]
  }
}