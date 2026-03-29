class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(firstWord, secondWord) {
        if (firstWord.length !== secondWord.length) return false;

        const wordMap = new Map();

        for (const letter of firstWord) {
            wordMap.set(letter, (wordMap.get(letter) || 0) + 1);
        }
        for (const letter of secondWord) {
            if (!wordMap.get(letter)) return false; 
            wordMap.set(letter, wordMap.get(letter) - 1);
        }

        return true;
    }
}
