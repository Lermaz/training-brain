function getConcatenation(nums: number[]): number[] {
    let ans = [];
    const n = nums.length;
    let rep = 0;

    while (rep < 2) {
        for (let i = 0; i < n; i++) {
            ans.push(nums[i]);
        }
        rep++;
    }

    return ans;
};
const nums: number[] = [1, 2, 1];
console.log("Result:", getConcatenation(nums));