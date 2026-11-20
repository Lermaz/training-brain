function isSubsequence(s: string, t: string): boolean {
    let i = 0;
    let j = 0;

    while (j <= t.length) {
        if (s.charAt(i) === t.charAt(j)) {
            i++;
        }
        j++;
    }
    return i > s.length ? true : false;
};

const s: string = "axc";
const t: string = "ahbgdc";
console.log("Result:", isSubsequence(s, t));