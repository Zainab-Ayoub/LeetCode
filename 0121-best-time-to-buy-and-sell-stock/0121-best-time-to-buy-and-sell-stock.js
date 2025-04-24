/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = Infinity;
    let profit = 0;
    for(let i=0; i<prices.length; i++){
        if(buy > prices[i]){
            buy = prices[i];
        } else{
            profit = Math.max(profit, prices[i] - buy);
        }
    }
    return profit;
};