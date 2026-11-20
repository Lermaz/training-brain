function isPalindrome(s: string): boolean {
    const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return clean === clean.split("").reverse().join("");
};

const s: string = "A man, a plan, a canal: Panama";
console.log("Result:",  isPalindrome(s));