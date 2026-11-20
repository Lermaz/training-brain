function hIndex(citations: number[]): number {
    const n = citations.length;
    citations.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (citations[i] >= n - i) {
            return n - i;
        }
    }

    return 0;
};

const citations: number[] = [0];
console.log("Result:", hIndex(citations));