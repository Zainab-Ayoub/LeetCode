class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minProfit = float(inf)
        maxProfit = 0

        for price in prices:
            if minProfit > price:
                minProfit = price

            profit = price - minProfit

            if maxProfit < profit:
                maxProfit = profit
            
        return maxProfit        
