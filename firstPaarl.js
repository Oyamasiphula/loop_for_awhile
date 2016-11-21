const assert = require('assert');

var paarlRegs = []

var firstPaarl = function(string) {
    var generatePlateNumberArr = string.split(', ');

    for (var i = 0; i < generatePlateNumberArr.length; i++) {
        if (generatePlateNumberArr[i].startsWith('CJ')) {
            paarlRegs.push(generatePlateNumberArr[i]);
        }
    }
    return paarlRegs[0];
};
assert.equal(firstPaarl('BBC 123 GP, CJ 2343, CA 6776, DRT 7889 L, BC 12 DF GP, CJ 4524'), 'CJ 2343');
