const assert = require('assert');

var plateNumberList = []
var displayEachRegNumber = function(registrationNumbers) {
    for (var i = 0; i < registrationNumbers.length; i++) {
      console.log(registrationNumbers[i]);
        plateNumberList.push(registrationNumbers[i]);
    }
    return plateNumberList
}
// test has been made just for the sake of testing (parsed registrationList) and my function's return statement
assert.deepEqual(displayEachRegNumber(['BBC 123 GP', 'CJ 2343', 'CA 6776', 'DRT 7889 L', 'BC 12 DF GP']),['BBC 123 GP', 'CJ 2343', 'CA 6776', 'DRT 7889 L', 'BC 12 DF GP']);
