function lastStoneWeight(stones: number[]): number {
    while (stones.length > 1) {
        stones.sort((a, b) => a - b);
        let x = stones.length - 2;
        let y = stones.length - 1;

        if (stones[x] <= stones[y]) stones.push(stones[y] - stones[x]);
        
        stones.splice(x, 2)
    }

    return !stones.length ? 0 : stones[0];
};

const stones: number[] = [2,7,4,1,8,1]; // 1
console.log("Result:", lastStoneWeight(stones));