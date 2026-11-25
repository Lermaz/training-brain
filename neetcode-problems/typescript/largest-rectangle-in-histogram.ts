class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const n = heights.length;
        let maxArea = 0;
        const stack: number[] = [];

        for (let i = 0; i <= n; i++) {
            console.log("stack", stack)
            while (
                stack.length &&
                (i === n || heights[stack[stack.length - 1]] >= heights[i])
            ) {
                const height = heights[stack.pop()!];
                const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                maxArea = Math.max(maxArea, height * width);
                console.log("height", height)
                console.log("width", width)
                console.log("maxArea", maxArea)
            }
            stack.push(i);
        }

        return maxArea;
    }
}
const heights: number[] = [2,1,5,6,2,3];
const solution = new Solution();
console.log("Result:", solution.largestRectangleArea(heights))