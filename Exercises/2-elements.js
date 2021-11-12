'use strict';

const removeElements = (array, ...items) => {
  for (const item of items) {
    const index = array.indexOf(item);
    const indexes = array.length - 1;
    if (index <= indexes && index >= 0) array.splice(index, 1);
  }
};
module.exports = { removeElements };
