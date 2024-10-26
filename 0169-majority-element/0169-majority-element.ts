function majorityElement(nums: number[]): number {
    var n = nums.length;
    var result = nums[0];
    var count = 1;
    for(var i=0; i<n; i++){
        var num = nums[i]
        if(num == result){
            ++count;
        } else{
            --count;
        }
        if(count == 0){
            result = num;
            count = 1;
        }
    }
    return result;
};