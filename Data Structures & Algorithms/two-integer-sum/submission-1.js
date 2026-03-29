class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seenValues = new Map();
    
        for(let i = 0; i < nums.length; i++){
            const value = nums[i]
            const substractResult = target - value

            if(seenValues.has(substractResult)){
                return [seenValues.get(substractResult), i]
            }

            seenValues.set(value, i)
        }

        return []
    }
}
