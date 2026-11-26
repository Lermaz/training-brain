function findMaxConsecutiveOnes(nums: number[]): number {
    let res = 0;
    let counter = 0;

    for (let num of nums) {
        counter = num === 1 ? counter + 1 : 0;
        res = Math.max(res, counter);
    }

    return res;
};
const nums: number[] = [1, 1, 0, 1, 1, 1];
console.log("Result:", findMaxConsecutiveOnes(nums));