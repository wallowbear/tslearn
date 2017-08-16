const path = require('path');
var glob=require("glob")
var files = glob.sync('./src/**/*.ts');
var newEntries = {};


console.log("files",files[1])
files.forEach(function(f){
    var name = f.split(".")[1];//得到apps/question/index这样的文件名
    // console.log(name,"```````````````````````")
    newEntries[name] = f;
});



module.exports = {
    entry: newEntries,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { 
        test: /\.ts$/, 
        exclude: /node_modules/, 
        loader: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};