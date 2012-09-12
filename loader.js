/*
** © 2012 by YOUSURE Tarifvergleich Gmbh
** Licensed under MIT License
*/

module.exports = load;

var fs = require('fs');
var path = require('path');

function load(directory, extension) {
  var args = Array.prototype.slice.call(arguments, 2);
  fs.readdirSync(directory).filter(function select(entry) {
    return path.extname(entry) === extension;
  }).forEach(function(entry) {
    return require(path.join(directory, entry)).apply(null, args);
  });
}
