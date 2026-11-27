function rotateString(s: string, goal: string): boolean {
    if (s.length !== goal.length) return false;

    let i = 0;
    while (i < s.length) {
        if (s === goal) return true;
        s = s.substring(1) + s[0];
        i++;
    }

    return false;
};

const s: string = "abcde";
const goal: string = "abced";
console.log("Result:", rotateString(s, goal));