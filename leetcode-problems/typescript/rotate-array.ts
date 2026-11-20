/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const n = nums.length;
    k = k % n;
    const rotated = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        rotated[(i + k) % n] = nums[i];
    }

    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
};

const nums: number[] = [1, 2, 3, 4, 5, 6, 7];
const k: number = 3;
console.log("Result", rotate(nums, k));