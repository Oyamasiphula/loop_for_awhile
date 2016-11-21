const assert = require('assert');

var allFromTown = function(registrationNumberString, location) {
    var plateNumberList = registrationNumberString.split(',');
    var specificTownPlateNumbers = []
    for (var i = 0; i < plateNumberList.length; i++) {
        if (plateNumberList[i].startsWith(location)) {
            specificTownPlateNumbers.push(plateNumberList[i]);
        }
    }
    return specificTownPlateNumbers
};
var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341'])

// from other place using same data string input
var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CF');
assert.deepEqual(fromKuilsriver, []);
