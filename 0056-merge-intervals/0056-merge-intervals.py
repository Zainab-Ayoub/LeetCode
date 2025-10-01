class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        merged = []
        intervals.sort()

        for interval in intervals:
            if not merged:
                merged.append(interval)
            else:
                prevInterval = merged[-1]    
                if prevInterval[1] >= interval[0]:
                    prevInterval[1] = max(prevInterval[1], interval[1])
                else:
                    merged.append(interval)
        return merged                