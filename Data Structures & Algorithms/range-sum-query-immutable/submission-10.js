class NumArray {
    nums = []
    constructor(nums) {
        this.nums = nums
    }
    sumRange(left, right) {
        return this.nums
            .slice(left, right + 1)
            .reduce((acc, curr) => acc + curr);
    }
}
