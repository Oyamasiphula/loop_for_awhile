const assert = require('assert');
var shoppingArrAResult = []
var shoppingList = function(string) {
    var generateShoppingListArr = string.split(', ');
    for (var i = 0; i < generateShoppingListArr.length; i++) {
        console.log(generateShoppingListArr[i]);
        shoppingArrAResult.push(generateShoppingListArr[i]);
    }
    return shoppingArrAResult
};
assert.deepEqual(shoppingList('1x bread, 6x hotdog rolls, 2x tubs of margarine '), ['1x bread', '6x hotdog rolls', '2x tubs of margarine ']);
