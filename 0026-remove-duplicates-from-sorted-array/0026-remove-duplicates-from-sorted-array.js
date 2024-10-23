/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length == 0) return 0;

    var unique = 1;
    for(var i=1; i<nums.length; i++){
        if(nums[i] != nums[i-1]){
            nums[unique] = nums[i];
            unique++;
        }
    }
    return unique;
};