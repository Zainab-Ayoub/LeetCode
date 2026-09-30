class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # Count frequency of each number
        count = Counter(nums)
        
        # Convert dictionary into list of (number, frequency)
        freq = list(count.items())
        
        # Sort by frequency, highest first
        freq.sort(key=lambda x: x[1], reverse=True)
        
        # Get the top k elements
        res = []
        
        for i in range(k):
            res.append(freq[i][0])
        
        return res