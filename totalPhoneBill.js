const assert = require('assert');

var totalPhoneBill = function(stringRecord) {
    var outGoingCallsAndSmsLog = stringRecord.split(', ');

    var callCost = 2.65;
    var totalCallCost;
    var totCalls = [];

    var smsCost = 0.65;
    var totalSmsCost;
    var totSms = [];


    for (var i = 0; i < outGoingCallsAndSmsLog.length; i++) {
        if (outGoingCallsAndSmsLog[i] === 'call') {
            totCalls.push(outGoingCallsAndSmsLog[i]);
        }
        if (outGoingCallsAndSmsLog[i] === 'sms') {
            totSms.push(outGoingCallsAndSmsLog[i]);
        }
    }
    totalCallCost = totCalls.length * callCost;
    totalSmsCost = totSms.length * smsCost;

    const totalBill = totalCallCost + totalSmsCost;
    return totalBill;
};

assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 7.25 )
