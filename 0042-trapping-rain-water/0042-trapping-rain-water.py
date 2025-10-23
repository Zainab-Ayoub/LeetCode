class Solution:
    def trap(self, height: List[int]) -> int:
        left = 1
        right = len(height) - 2

        lMax = height[left - 1]
        rMax = height[right + 1]

        result = 0

        while left <= right:
            if rMax <= lMax:
                result += max(0, rMax - height[right])
                rMax = max(rMax, height[right])
                right -= 1

            else:
                result += max(0, lMax - height[left])
                lMax = max(lMax, height[left])
                left += 1   

        return result         