function productExceptSelf(nums: number[]): number[] {
    const output = Array(nums.length).fill(1);

    let left = 1;
    for (let i = 0; i < nums.length; i++) {
        output[i] *= left;
        left *= nums[i];
    }

    let rigth = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= rigth;
        rigth *= nums[i];
    }

    return output;
};

const nums: number[] = [1, 2, 3, 4];
console.log("Result:", productExceptSelf(nums));