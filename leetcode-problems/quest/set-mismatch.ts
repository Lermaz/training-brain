function findErrorNums(nums: number[]): number[] {
    const n = nums.length;
    let seenNum = new Set();
    let duplicate = 0;

    for (const num of nums) {
        if (seenNum.has(num)) duplicate = num;
        seenNum.add(num);
    }

    for (let i = 1; i <= n; i++) {
        if (!seenNum.has(i)) return [duplicate, i];
    }
};
const nums: number[] = [2, 2];
console.log("Result:", findErrorNums(nums));