class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // topKFrequent(nums: number[], k: number): number[] {
    //     const map = new Map<number, number>();
    //     const seen: number[] = [];

    //     for (let num of nums) {
    //         map.set(num, (map.get(num) || 0) + 1)
    //     }

    //     for (let frequent of map) {
    //         console.log("frequent", frequent)
    //         if (frequent[1] >= k) seen.push(frequent[0]);
    //     }
    //     return seen;
    // }

    // topKFrequent(nums: number[], k: number): number[] {
    //     const map = new Map<number, number>();
        
    //     for (let num of nums) {
    //         map.set(num, (map.get(num) || 0) + 1);
    //     }

    //     const sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
    //     return sorted.slice(0, k).map(entry => entry[0])
    // }

    topKFrequent(nums: number[], k: number): number[] {
        const count: { [key: number]: number } = {}
        
        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }
        const sorted: [number, number][] = Object.entries(count).map(([num, freq]) => [freq, parseInt(num)]);
        sorted.sort((a, b) => b[0] - a[0]);
        return sorted.slice(0, k).map(entry => entry[1])
    }
}
const nums = [1,2,2,3,3,3,3];
const k = 2;
const solution = new Solution();
console.log("Result:", solution.topKFrequent(nums, k));