function canJump(nums: number[]): boolean {
    let goal = nums.length - 1;
    
    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= goal) {
            goal = i;
        }
    }

    return goal === 0;
};

const nums: number[] = [2,5,0,0];
console.log("Result:", canJump(nums));