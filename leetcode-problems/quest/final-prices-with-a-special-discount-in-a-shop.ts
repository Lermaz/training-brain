function finalPrices(prices: number[]): number[] {
    const n = prices.length;
    let res = [];

    for (let i = 0; i < n; i++) {
        let j = i + 1;

        while (j < n) {
            if (prices[i] >= prices[j]) {
                res.push(prices[i] - prices[j]);
                break;
            }
            j++;
        }

        if (j === n) res.push(prices[i]);
    }

    return res;
};

const prices: number[] = [10,1,1,6];
console.log("Result:", finalPrices(prices));