function maxArea(height: number[]): number {
    let i = 0;
    let j = height.length - 1;
    let maxArea = 0;

    while (i < j) {
        maxArea = Math.max(maxArea, (j - i) * Math.min(height[i], height[j]));

        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return maxArea;
};

const height: number[] = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log("Result:", maxArea(height));