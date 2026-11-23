class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const res = new Map<string, string[]>();

        for (let s of strs) {
            let sortedS = s.split('').sort().join('');
            if (!res[sortedS]) {
                res[sortedS] = [];
            }
            res[sortedS].push(s);
        }

        return Object.values(res);
    }
}

const strs = ["act","pots","tops","cat","stop","hat"];
const solution = new Solution();
console.log("Result:", solution.groupAnagrams(strs));