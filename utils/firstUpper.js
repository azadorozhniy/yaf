'use strict';
module.exports = function firstUpper(string) {
  return string.charAt(0).toUpperCase() + string.substr(1);
};
