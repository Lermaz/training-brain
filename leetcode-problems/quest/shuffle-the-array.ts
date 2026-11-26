function shuffle(nums: number[], n: number): number[] {
    const length = nums.length;
    let res = [];

    for (let i = 0; n < length; i++) {
        res.push(nums[i], nums[n])
        n++;
    }

    return res;
};
const nums: number[] = [2, 5, 1, 3, 4, 7];
const n: number = 3;
console.log("Result:", shuffle(nums, n));