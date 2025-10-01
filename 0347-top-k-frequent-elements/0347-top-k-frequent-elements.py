class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        countFreqInMap = {}
        freqInListForBucketSort = [[] for i in range(len(nums) + 1)]

        for n in nums:
            countFreqInMap[n] = 1 + countFreqInMap.get(n, 0)

        for n, c in countFreqInMap.items():
            freqInListForBucketSort[c].append(n)    

        result = []
        for c in range(len(freqInListForBucketSort)-1, 0, -1):
            for n in freqInListForBucketSort[c]:
                result.append(n)
                if len(result) == k:
                    return result