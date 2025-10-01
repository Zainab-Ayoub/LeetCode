class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        merged = []
        intervals.sort()
        count = 0
        for interval in intervals:
            if not merged:
                merged.append(interval)
            else:
                prevInterval = merged[-1]    
                if prevInterval[1] > interval[0]:
                    count += 1
                    if prevInterval[1] > interval[1]:
                        merged[-1] = interval
                else:
                    merged.append(interval)
        return count                