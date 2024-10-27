/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    k = k % nums.length;

    function rev(l: number, r: number): void {
        while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
    }

    rev(0, nums.length - 1);    
    rev(0, k - 1);             
    rev(k, nums.length - 1);    
}