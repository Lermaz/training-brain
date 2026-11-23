function convert(s: string, numRows: number): string {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    let idx = 0, d = 1;
    const rows = new Array(numRows).fill("").map(() => []);

    for (const char of s) {
        rows[idx].push(char);
        if (idx === 0) {
            d = 1;
        } else if (idx === numRows - 1) {
            d = -1;
        }
        idx += d;
    }

    return rows.map(row => row.join('')).join('');
};

// function convert(s: string, numRows: number): string {
//     if (s.length === 1) return s;
//     let result = ""

//     for (let i of s) {
//         for (let j of s) {
//             result += s[j]
//             if (i > 0 && i < numRows - 1 && j + (2 * (numRows - 1)))
//         }
//     }

// };

const s: string = "PAYPALISHIRING"; // PAHNAPLSIIGYIR
const numRows: number = 3;
console.log("Result;", convert(s, numRows))