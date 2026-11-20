function removeDuplicates(nums: number[]): number {
    let i = 1;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i - 1]) {
            nums[i] = nums[j];
            i++;
        }
    }

    console.log("nums", nums.slice(0, i));
    return i;
};

const nums = [0,0,1,1,1,2,2,3,3,4]
console.log("Result:", removeDuplicates(nums))