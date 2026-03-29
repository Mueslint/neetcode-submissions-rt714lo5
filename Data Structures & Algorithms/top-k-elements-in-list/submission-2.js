class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numberCount = new Map();

        for(const num of nums){
            numberCount.set(num, (numberCount.get(num) || 0) + 1);
        }

        return Array
            .from(numberCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map((el) => el[0])
        
    }

}
