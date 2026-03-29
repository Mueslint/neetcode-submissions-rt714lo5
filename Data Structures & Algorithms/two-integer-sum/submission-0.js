class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seenValues = new Map();
    
        for(let i = 0; i < nums.length; i++){
            console.log(seenValues)
            const subResult = target - nums[i]

            if(seenValues.has(subResult)){
                return [seenValues.get(subResult), i]
            }

            seenValues.set(nums[i], i)
        }

        return []
    }
}
