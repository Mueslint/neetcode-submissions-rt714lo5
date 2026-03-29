class Solution {
    longestConsecutive(nums) {
        if (!nums || !nums.length) return 0
        const uniq = new Set(nums)
        const isMiddle = (number) => uniq.has(number+1) && uniq.has(number-1)
        const isLast = (number) => uniq.has(number-1) && !uniq.has(number+1)
        const isHead = (number) => !uniq.has(number - 1);
        
        let longestStreak = 0;
        for(let num of uniq.keys()){
            let localStreak = 0
            if(isHead(num)){
                localStreak++ // because it's the head
                while(uniq.has(num + 1)){
                    num++
                    localStreak++
                }
                if(localStreak > longestStreak) longestStreak = localStreak;
            }
        }

        return longestStreak
    }
}
