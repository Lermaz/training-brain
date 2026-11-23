function reverseWords(s: string): string {
    let reverse = s.split(" ").filter(n => n);
    
    let res = "";
    console.log("reverse", reverse.sort())
    for (let i = 0; i < reverse.length - 1; i++) {
        if (reverse[i]) res += reverse[i] + " ";
    }
    res += reverse[reverse.length - 1]
    return res;
};

const s: string = "  hello world  ";
console.log("Result:", reverseWords(s));