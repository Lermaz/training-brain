class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let i = 0;
        let j = numbers.length - 1;

        while (i < j) {
            let sum: number = numbers[i]! + numbers[j]!;
            if (sum === target) {
                return [i + 1, j + 1];
            }

            if (sum <= target) {
                i++
            } else {
                j--;
            }
        }

        return [];
    }
}

const numbers: number[] = [1,2,3,4];
const target: number = 3
const solution = new Solution();
console.log("Result:", solution.twoSum(numbers, target));