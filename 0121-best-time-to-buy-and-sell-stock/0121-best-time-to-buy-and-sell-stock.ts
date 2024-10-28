function maxProfit(prices: number[]): number {
    var l = 0, r = 1;
    var maxProfit = 0;
    while(r < prices.length){
        if(prices[l] < prices[r]){
            var profit = prices[r] - prices[l];
            if(maxProfit <= profit){
                maxProfit = profit;
            }
        } else{
            l = r;
        }
        r++;
    }
    return maxProfit;
};