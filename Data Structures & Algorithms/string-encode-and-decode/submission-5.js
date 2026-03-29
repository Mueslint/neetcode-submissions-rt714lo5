class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(!strs || strs.length === 0) return 'empty'
        console.log('encode', strs.join('UwU'))
        return strs.join('UwU');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str === 'empty') return []
        return str.split('UwU')
    }
}
