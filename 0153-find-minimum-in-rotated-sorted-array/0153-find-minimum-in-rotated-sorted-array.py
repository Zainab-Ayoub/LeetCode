class Solution:
    def findMin(self, nums: List[int]) -> int:
        minValue = float('inf')
        start, end = 0, len(nums)-1

        while(start <= end):
            if nums[start] <= nums[end]:
                minValue = min(minValue, nums[start])
                break
            mid = (start+end) // 2
            minValue = min(minValue, nums[mid])
            if nums[start] <= nums[mid]:
                start = mid+1
            else:
                end = mid-1           
        return minValue                 
