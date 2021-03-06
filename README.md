# react-component-library
react component collection


## 1. Init project
```
npm init
npm install --save react react-dom prop-types
npm install --save-dev webpack webpack-dev-server babel-core babel-polyfill babel-loader babel-runtime babel-plugin-transform-runtime babel-preset-es2015 babel-preset-react babel-preset-stage-2 babel-plugin-react-transform html-webpack-plugin react-transform-hmr style-loader css-loader
npm install --save redux react-redux
npm install --save redux-logger redux-thunk
npm install --save-dev less less-loader
npm install --save-dev jest babel-jest enzyme enzyme-adapter-react-16 enzyme-to-json
npm install --save-dev identity-obj-proxy
npm install --save-dev request
```

## 2. Create the componet 
```
mkdir src/components/comment
touch CommnentApp.js
touch CommentInput.js
touch CommentList.js
touch Comment.js
touch Comment.css
```
## 3. Open package.json and add following script   
```
"scripts": {
 "start": "webpack-dev-server --watch",
 "build": "webpack --progress --colors",
 "test": "jest",
  "test:watch": "npm test -- --watch"
}
```
## 4. modify the webpack.config.js file. add some usefull and I think it is important section:
```
devtools: eval-source-map,
devServer : {
    contentBase: '.',
    port: 8080,
    historyApiFallback: true,
    inline: true,
    hot: true
},
```
## 5. Add three usefull plugins in webpack.config.js.of course I think it is important.
```
const webpack = require('webpack');
const webpackHtmlPlugin = require('html-webpack-plugin');

plugins:[
        new webpack.BannerPlugin('Copyright @ nateliu.github.io'),
        new webpackHtmlPlugin({
            template: __dirname+'/src/index.tmpl.html' //very important to bundle to output path.
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
 output: {
        path: __dirname + '/public',
        filename: 'bundle-[id]-[hash].js' //very important in cache
    },
```  
## 6. npm start

## 7. Debug jest in VS Code
Add following into launch.json, section of "configurations": []
```
    {
        "type": "node",
        "request": "launch",
        "protocol": "inspector",
        "name": "Jest Debug",
        "program": "${workspaceRoot}/node_modules/jest/bin/jest",
        "stopOnEntry": false,
        "args": ["--runInBand", "--env=jsdom", "${fileBasename}"],
        "runtimeArgs": [
            "--inspect-brk"
            ],
            "cwd": "${workspaceRoot}",
            "sourceMaps": true,
            "console": "integratedTerminal"
    }
```
