function smallerNumbersThanCurrent(nums: number[]): number[] {
    const n = nums.length;
    let res = []

    for (let i = 0; i < n; i++) {
        let j = 0;
        let counter = 0;
        while (j < n) {
            if (nums[i] > nums[j++]) counter++;
        }
        res.push(counter);
    }

    return res;
};
const nums: number[] = [8, 1, 2, 2, 3];
console.log("Result:", smallerNumbersThanCurrent(nums));