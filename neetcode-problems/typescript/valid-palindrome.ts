class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        return cleanString === cleanString.split("").reverse().join("");
    }
}


const solution = new Solution();
const s = "Was it a car or a cat I saw?";
// wasitacaroracatisaw
console.log("Result", solution.isPalindrome(s));