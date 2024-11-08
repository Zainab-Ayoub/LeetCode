#include <vector>
#include <algorithm>

class Solution {
public:
    int jump(std::vector<int>& nums) {
        int l = 0, r = 0;
        int res = 0;

        while (r < nums.size() - 1) {
            int farthest = 0;
            for (int i = l; i <= r; i++) {
                farthest = std::max(farthest, i + nums[i]);
            }
            l = r + 1;
            r = farthest;
            res += 1;
        }
        return res;
    }
};
