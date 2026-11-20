function majorityElement(nums: number[]): number {
    const hash = {};
    let res = 0;
    let majority = 0;

    for (let n of nums) {
        hash[n] = 1 + (hash[n] || 0);
        if (hash[n] > majority) {
            res = n;
            majority = hash[n];
        }
    }

    return res;  
};

const nums = [2,2,1,1,1,2,2];
console.log("Result:", majorityElement(nums));