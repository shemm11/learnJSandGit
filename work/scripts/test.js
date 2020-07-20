'use strict';

const items = ['item1', 'item2', 'item3'];
const copy = [];

// до
//for (let i = 0; i < items.length; i++) {
//  copy.push(items[i]);
//}

// после
items.forEach(function(item){
  copy.push(item);
});

console.log(copy);