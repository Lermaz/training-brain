class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const length = nums.length;
        const output: number[] = Array(length).fill(1)

        let left = 1;
        for (let i = 0; i < length; i++) {
            output[i]! *= left;
            left *= nums[i]!;
        }

        let right = 1;
        for (let i = length - 1; i >= 0; i--) {
            output[i]! *= right;
            right *= nums[i]!;
        }

        return output;
    }
}

const nums: number[] = [1,2,4,6]; // [48,24,12,8]
const solution = new Solution();
console.log("Result:", solution.productExceptSelf(nums))