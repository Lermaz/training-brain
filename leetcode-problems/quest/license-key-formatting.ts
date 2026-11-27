function licenseKeyFormatting(s: string, k: number): string {
    let arr: string = s.replace(/-/g, '').split('').reverse().join('');
    const n = arr.length;
    let res: string = '';

    for (let i = n - 1; i >= 0; i--) {
        res += arr[i].toUpperCase();
        if (i % k === 0 && i > 0) {
            res += '-';
        }
    }

    return res;
};

const s: string = "5F3Z-2e-9-w";
const k: number = 4;
console.log("Result:", licenseKeyFormatting(s, k));