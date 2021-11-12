'use strict';

const removeElement = (array, item) => {
  const index = array.indexOf(item);
  if (index <= array.length - 1 && index >= 0) array.splice(index, 1);
};

module.exports = { removeElement };
