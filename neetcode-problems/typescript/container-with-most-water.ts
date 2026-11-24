class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0;
        let r = heights.length - 1;
        let res = 0;

        while (l < r) {
            const area = Math.min(heights[l]!, heights[r]!) * (r - l);
            console.log("area", area)
            res = Math.max(res, area);
            if (heights[l]! <= heights[r]!) {
                l++;
            } else {
                r--;
            }
        }
        return res;
    }
}
const height = [1,7,2,5,4,7,3,6];
const solution = new Solution();
console.log("Result:", solution.maxArea(height));