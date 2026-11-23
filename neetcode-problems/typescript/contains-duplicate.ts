class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const list = new Set(nums);
        return nums.length !== list.size ? true : false;
    }
}

const nums = [1, 2, 3, 3]
const solution = new Solution();
console.log("Result:", solution.hasDuplicate(nums));