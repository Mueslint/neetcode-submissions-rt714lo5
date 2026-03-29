class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    if (s.length !== t.length) return false; //  Quick O(1) on words length

    const count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of t) {
        // If letter count mismatch it makes an eval of !0 which is true so we quit 
        if (!count[char]) return false; 
        count[char]--;
    }
    
    return true;
}
}
