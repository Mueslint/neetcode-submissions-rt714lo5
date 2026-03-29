class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numberMap = new Map();

        for(const number of nums){
            if(numberMap.has(number)) return true;
            numberMap.set(number)
        }
        return false
    }
}
