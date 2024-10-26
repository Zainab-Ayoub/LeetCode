class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function majorityElement($nums) {
        $result = $nums[0];
        $temp = 1;
        for ($i = 0; $i < count($nums); $i++){
            $num = $nums[$i];
            if($num == $result){
                ++$temp;
            } else {
                --$temp;
            }
            if($temp == 0){
                $result = $num;
                $temp = 1;
            }
        }
        return $result;
    }
}