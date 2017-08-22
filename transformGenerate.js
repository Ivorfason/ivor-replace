var fs = require('fs');

var transformGenerate = function (path, str) {
    fs.writeFile(path, str, function() {
        console.log('Generated Success!');
    });
}

module.exports = transformGenerate;