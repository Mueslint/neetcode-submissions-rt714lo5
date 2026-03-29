class Solution {
    groupAnagrams(words) {
        const anagramMap = new Map();
        for(const word of words){
            const wordHash = word.split('').sort().join('');
            if(!anagramMap.has(wordHash)){
                anagramMap.set(wordHash, [word])
            } else {
                anagramMap.set(
                    wordHash,
                    [...anagramMap.get(wordHash), word]
                )
            }
        }

        return Array.from(anagramMap.values())
    }
}
