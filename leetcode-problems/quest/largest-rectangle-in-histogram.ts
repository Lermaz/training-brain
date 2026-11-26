function largestRectangleArea(heights: number[]): number {
    const n = heights.length;
    const stack: number[] = [];
    let maxArea: number = 0;

    for (let i = 0; i <= n; i++) {
        while (
            stack.length &&
            (i === n || heights[stack[stack.length -1]] >= heights[i])
        ) {
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    return maxArea;
};

const heights: number[] = [2, 1, 5, 6, 2, 3];
console.log("Result:", largestRectangleArea(heights)); 