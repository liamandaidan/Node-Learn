//getting access to lodash
const _ = require('lodash')
//example of lodash flatten
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("pog!");