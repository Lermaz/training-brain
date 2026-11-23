class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        let arrayS = s.split("").sort();
        let arrayT = t.split("").sort();

        for (let i = 0; i < s.length; i++) {
            if (arrayS[i] !== arrayT[i]) return false;
        }

        return true;
    }
}
let s = "racecar"
let t = "carrace"
const solution = new Solution()
console.log("Result:", solution.isAnagram(s, t))