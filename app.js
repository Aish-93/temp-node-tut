// local dependancies

// npm install -g <packageName>

// global dependancies

//sudo npm install -g <packageName> mac


const  _= require('lodash');

const items = [1, [2, [3, [4, [5]]]]]

const newItems = _.flattenDeep(items);

console.log(newItems);