class Solution {
    longestConsecutive(nums) {
        if (!nums || !nums.length) return 0;

        let longestStreak = 0;
        const uniqueNumberSet = new Set(nums)
        
        for(let number of uniqueNumberSet.keys()){
            let localStreak = 0
            if(!uniqueNumberSet.has(number - 1)){
                // Number is head, start incrementing the streak;
                localStreak++ 
                // While we found a consecutive number we increment streak & iterate over the next one
                while(uniqueNumberSet.has(number + 1)){
                    number++
                    localStreak++
                }
                // If the candidate head streak is greater than the stored one, update value
                if(localStreak > longestStreak) {
                    longestStreak = localStreak;
                }
            }
        }

        return longestStreak
    }
}
