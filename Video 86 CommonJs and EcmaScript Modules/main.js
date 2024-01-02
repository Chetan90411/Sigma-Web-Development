// CommonJs
// const http = require('node:http');
// const fs = require(fs)

// ES Modules
// import http from "http";

// Named export in ES Module
// import { a, b, d } from "./mymodule.js";
// console.log(a, b, d);

// default export in ES Module
// import Harry from "./mymodule.js"
// console.log(Harry)

// CommonJS import 
const a = require("./mymodule2.js");
console.log(a, __dirname, __filename);

// (function(exports, require, module, __filename, __dirname) {
//     // Module code actually lives here
// })