const fs = require("fs");
const { walk } = require("./walker");
const babel = require("@babel/core");
const parser = require("@babel/parser");
const { default: traverse } = require("@babel/traverse");
const myPlugin = require("./plugin");

const parserPlugins = [
    'jsx',
    'classProperties', // '@babel/plugin-proposal-class-properties',
    'flow',
  ];

const transformFile = (fileName) => {
    const inputCode = fs.readFileSync(fileName, "utf-8");
    const ast = parser.parse(inputCode, {
        sourceType: 'module',
        plugins: parserPlugins
    })
    console.log(ast);

    traverse(ast, myPlugin(babel).visitor);
}

const allFiles = walk();

// allFiles.forEach(fileName => transformFile(fileName))
transformFile(allFiles[0])