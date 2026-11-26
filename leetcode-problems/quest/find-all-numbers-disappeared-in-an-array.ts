function findDisappearedNumbers(nums: number[]): number[] {
    const n = nums.length;
    const b = new Set(nums);
    let res = [];

    for (let i = 1; i <= n; i++) {
        if (!b.has(i)) res.push(i);
    }

    return res;
};
const nums: number[] = [10,2,5,10,9,1,1,4,3,7];
console.log("Result:", findDisappearedNumbers(nums));