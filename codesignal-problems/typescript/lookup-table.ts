function solution(numbers: number[]): number {
    const counts = new Map<number, number>();
    let answer = 0;

    for (const element of numbers) {
        counts.set(element, (counts.get(element) ?? 0) + 1);

        for (let twoPower = 0; twoPower < 21; twoPower++) {
            const secondElement = (1 << twoPower) - element;
            answer += counts.get(secondElement) ?? 0;
        }
    }

    return answer;
}

const numbers: number[] = [1, -1, 2, 3];
console.log("Result:", solution(numbers))