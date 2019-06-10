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
      }
    ]
  }
}