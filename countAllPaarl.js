const assert = require('assert');

var allPaarl = function(registrationNumberString) {

    var paarlRegistrationPlates = []
    var plateNumberList = registrationNumberString.split(', ')

    for (var i = 0; i < plateNumberList.length; i++) {
        if (plateNumberList[i].startsWith('CJ')) {
            paarlRegistrationPlates.push(plateNumberList[i])
        }
    }
    return paarlRegistrationPlates.length;
};
assert.equal(allPaarl('BBC 123 GP, CJ 2343, CA 6776, DRT 7889 L, BC 12 DF GP, CJ 4524'), 2)
