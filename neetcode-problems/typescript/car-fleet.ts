class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        let pair: number[][] = position.map((p, i) => [p, speed[i]!]);
        pair.sort((a, b) => b[0]! - a[0]!);
        let stack: number[] = [];

        for (let [p, s] of pair) {
            stack.push((target - p!) / s!);
            if (
                stack.length >= 2 &&
                stack[stack.length - 1]! <= stack[stack.length - 2]!
            ) {
                stack.pop();
            }
        }

        return stack.length;
    }
}
const target: number = 10;
const position: number[] = [1,4];
const speed: number[] = [3,2];
const solution = new Solution();
console.log("Result:", solution.carFleet(target, position, speed));