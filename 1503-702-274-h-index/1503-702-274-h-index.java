class Solution {
    public int hIndex(int[] citations) {
        int n = citations.length;
        int[] bucket = new int[n + 1];

        // Populate the bucket array
        for (int citation : citations) {
            if (citation > n) {
                bucket[n]++;
            } else {
                bucket[citation]++;
            }
        }

        // Calculate the h-index
        int count = 0;
        for (int i = n; i >= 0; i--) {
            count += bucket[i];
            if (count >= i) {
                return i;
            }
        }

        return 0;
    }
}
