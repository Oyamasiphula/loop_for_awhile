const assert = require('assert');

var countAllFromTown = function(registrationNumberString,location){
    var plateNumberList = registrationNumberString.split(',');
    var specificTownPlateNumbers = [];
    for(var i=0; i<plateNumberList.length; i++){
          if(plateNumberList[i].startsWith('CL')){
            specificTownPlateNumbers.push(plateNumberList[i]);
          }
    }
    return specificTownPlateNumbers.length;
};
var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
assert.equal(fromStellies,3)
