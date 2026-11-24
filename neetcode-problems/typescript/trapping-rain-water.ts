class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        if (!height || height.length === 0) {
            return 0;
        }

        let l = 0;
        let r = height.length - 1;
        let leftMax: number = height[l]!;
        let rightMax: number = height[r]!;
        let res = 0;

        while (l < r) {
            console.log("tes", leftMax, rightMax)
            if (leftMax < rightMax) {
                l++;
                leftMax = Math.max(leftMax, height[l]!);
                res += leftMax - height[l]!;
            } else {
                r--;
                rightMax = Math.max(rightMax, height[r]!);
                res += rightMax - height[r]!;
            }
        }

        return res;
    }
}
const height: number[] = [0,2,0,3,1,0,1,3,2,1];
const solution = new Solution();
console.log("Result:", solution.trap(height));