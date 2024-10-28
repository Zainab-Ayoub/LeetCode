class Solution {

    /**
     * @param Integer[] $prices
     * @return Integer
     */
    function maxProfit($prices) {
        $l = 0;
        $r = 1;
        $maxProfit = 0;
        
        while ($r < count($prices)) {
            if ($prices[$l] < $prices[$r]) {
                $profit = $prices[$r] - $prices[$l];
                if ($maxProfit <= $profit) {
                    $maxProfit = $profit;
                }
            } else {
                $l = $r;
            }
            $r++;
        }
        
        return $maxProfit;
    }
}
