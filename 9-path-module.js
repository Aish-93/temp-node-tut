const path = require('path')

console.log(path.sep)

const filePath = path.join('/content','subfolder','gen.txt')

// console.log(filePath);

const base = path.basename(filePath);

console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder','gen.txt');

console.log(absolute); 

const osre = require('os');

console.log(osre.cpus());
