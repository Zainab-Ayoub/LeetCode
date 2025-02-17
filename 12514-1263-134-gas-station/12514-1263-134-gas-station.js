/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    var tank = 0;
    var totalGas = 0;
    var totalCost = 0;
    var startIndex = 0;

    for (var i = 0; i < gas.length; i++){
        totalGas += gas[i];
        totalCost += cost[i];
        tank += gas[i] - cost[i];

        if (tank < 0){
            startIndex = i + 1;
            tank = 0;
        } 
    }
    if (totalGas < totalCost){
        return -1;
    }
    return startIndex;
};