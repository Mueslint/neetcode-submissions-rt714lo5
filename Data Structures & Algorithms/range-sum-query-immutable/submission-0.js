class NumArray {
    /**
     * @param {number[]} nums
     */
    nums = []
    constructor(nums) {
        this.nums = nums
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        console.log(this.nums.slice(left, right + 1))
        const slice = this.nums.slice(left, right + 1);
        const sum = slice.reduce((acc, curr) => acc + curr)
        console.log(sum)
        return sum
    }
}
