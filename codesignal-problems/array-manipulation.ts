function solution(a: number[]): number[] {
    const b: number[] = [];
    
    for (let i = 0; i < a.length; i++) {
        let first = a[i - 1] ?? 0;
        let second = a[i]!;
        let third = a[i + 1] ?? 0;
        b.push(first + second + third);
    }
    return b
}

// function solution(a: number[]): number[] {
//     const n: number = a.length;
//     const b: number[] = Array(n).fill(0);

//     for (let i = 0; i < n; i++) {
//         b[i] = a[i]!;
//         if (i > 0) b[i] += a[i - 1] ?? 0;
//         if (i < n - 1) b[i] += a[i + 1] ?? 0;
//     }
//     return b;
// }

const array: number[] = [4, 0, 1, -2, 3];
console.log("Result:", solution(array));