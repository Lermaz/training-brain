function repeatedStringMatch(a: string, b: string): number {
    let m: number = a.length;
    let n: number = b.length;
    let repetitionCount: number = Math.floor(n / m);
    let repeatedString: string = a.repeat(repetitionCount)

    for (let i = 0; i < 3; i++) {
        if (repeatedString.includes(b)) {
            return repetitionCount;
        }

        repetitionCount++;
        repeatedString += a;
    }

    return -1;
};

const a: string = "abcd";
const b: string = "cdabcdab";
console.log("Result:", repeatedStringMatch(a, b));