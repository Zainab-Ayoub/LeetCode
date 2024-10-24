function removeDuplicates(nums: number[]): number {
    var count = 1, k = 1;
    for(var i=1; i<nums.length; i++){
        if(nums[i] == nums[i-1]){
            count += 1;
        } else{
            count = 1;
        }
        if(count < 3){
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};