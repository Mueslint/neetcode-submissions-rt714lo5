class Solution {
    /**
     * leftsum + pivot + rightsum = totalsum
     * rightSum = totalsum - leftSum - pivot
     * ET AUSSI
     * pivot existe ssi rightSum === leftSum
     */
    pivotIndex(nums) {
        let leftSum = 0;
        const totalSum = nums.reduce((acc, curr) => acc + curr)

        for(let i = 0; i < nums.length; i++){
            const rightSum = totalSum - leftSum - nums[i]
            if(rightSum === leftSum) return i;
            leftSum += nums[i]
        }
        
        return -1
    }
}
