class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if(nums.size() == 0) return 0;
        int unique = 1;
        for(int i=1; i<nums.size(); i++){
            if(nums[i] != nums[i - 1]){
                nums[unique] = nums[i];
                unique++;
            }
        }
        return unique;
    }
};