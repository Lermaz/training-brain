class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const prevMap = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i]!;
            if (prevMap.has(diff)) {
                return [prevMap.get(diff)!, i];
            }

            prevMap.set(nums[i]!, i);
        }

        return [];
    }
}

let nums = [-1,-2,-3,-4,-5];
let target = -8;
const solution = new Solution();
console.log("Result:", solution.twoSum(nums, target))