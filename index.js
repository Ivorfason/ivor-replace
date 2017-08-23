var fs = require('fs');
var path = require('path');
var transformString = require('./transformString');
var transformGenerate = require('./transformGenerate');

var transformer = function (sourcePath, transArr, newName, newPath) {
    var source = fs.readFileSync(sourcePath).toString();
    var result = transformString(source, transArr, true);
    transformGenerate(path.resolve(newPath, newName), result);
}

module.exports = transformer;
