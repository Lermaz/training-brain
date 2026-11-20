function twoSum(nums: number[], target: number): number[] {
    let map = {}

    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in map) {
            return [i, map[target - nums[i]]];
        }

        map[nums[i]] = i;
    }
    
    return []
};

const nums: number[] = [3,2,4];
const target: number = 6;
console.log("Result:", twoSum(nums, target))