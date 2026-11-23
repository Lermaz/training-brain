function reverseWords(s: string): string {
    let reverse = s.split(" ").filter(n => n);
    let res = "";

    for (let i = reverse.length - 1; i > 0; i--) {
        if (reverse[i]) res += reverse[i] + " ";
    }
    res += reverse[0]
    return res;
};

const s: string = "  hello world  ";
console.log("Result:", reverseWords(s));