class Solution {
    hasDuplicate(nums) {
        const numsSet = new Set();
        
        for(let number of nums){
            if(numsSet.has(number)) return true;
            numsSet.add(number)
        }

        return false
    }
}
