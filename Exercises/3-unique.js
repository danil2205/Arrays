'use strict';

const unique = (array) => {
  const result = [];
  for (const item of array) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

module.exports = { unique };
