/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let uniqueNumbers = new Set();

    for(let i=0; i<nums.length; i++){
        if(uniqueNumbers.has(nums[i])){
            return true;
        } else{
            uniqueNumbers.add(nums[i]);
        }
    }
    return false;
};