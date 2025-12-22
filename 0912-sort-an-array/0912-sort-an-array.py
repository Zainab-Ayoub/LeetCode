class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        def quick_sort(l ,r):
            if l >= r:
                return
            pivot = random.randint(l, r)
            p = nums[pivot]
            scan_index = l 
            less_than_bar = l
            great_than_bar = r
            while scan_index <= great_than_bar:
                if nums[scan_index] < p:
                    nums[less_than_bar], nums[scan_index] = nums[scan_index], nums[less_than_bar]
                    less_than_bar += 1
                    scan_index += 1
                elif nums[scan_index] > p:
                    nums[great_than_bar], nums[scan_index]  = nums[scan_index], nums[great_than_bar]
                    great_than_bar -=1
                else: # nums[scan] == p
                    scan_index += 1

            quick_sort(l, less_than_bar - 1)
            quick_sort(great_than_bar + 1, r)
        quick_sort(0, len(nums) - 1)
        return nums