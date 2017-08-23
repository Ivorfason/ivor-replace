var result = '';

var transformString = function (source, transArr, isResult) {
    if (isResult) {
        result = '';
    }
    var searchIndex = Number.POSITIVE_INFINITY;
    var searchLength = 0;
    var searchItem = '';
    transArr.map(function (item, index) {
        if (source.indexOf('<## ' + item.key + ' ##>') != -1 && source.indexOf('<## ' + item.key + ' ##>') < searchIndex) {
            searchIndex = source.indexOf('<## ' + item.key + ' ##>');
            searchLength = ('<## ' + item.key + ' ##>').length;
            searchItem = item.value;
        }
    })
    if (searchIndex == Number.POSITIVE_INFINITY) {
        result = result + source;
        return result;
    } else {
        result = result + source.substring(0, searchIndex) + searchItem;
        transformString(source.substring(searchIndex + searchLength), transArr, false);
        return result;
    }
}

module.exports = transformString;
