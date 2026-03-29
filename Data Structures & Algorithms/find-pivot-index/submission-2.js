class Solution {
    /**
     * left + pivot + right = totalsum
     * rightSum = totalsum - leftSum - pivot
     * ET AUSSI
     * pivot existe ssi rightSum === leftSum
     */
    pivotIndex(nums) {
        let leftSum = 0;
        let totalSum = 0;
        for(const num of nums){
            totalSum += num;
        };

        for(let i = 0; i < nums.length; i++){
            const rightSum = totalSum - leftSum - nums[i]
            if(rightSum === leftSum) return i;
            leftSum += nums[i]
        }
        
        return -1
    }
}
