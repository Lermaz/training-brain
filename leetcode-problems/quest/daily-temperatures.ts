/* This is how I do it */
// function dailyTemperatures(temperatures: number[]): number[] {
//     const n = temperatures.length;
//     let res = [];

//     for (let i = 0; i < n; i++) {
//         let j = i + 1;
        
//         while (j < n) {
//             if (temperatures[i] < temperatures[j]) {
//                 res.push(j - i);
//                 break;
//             }
//             j++;
//         }

//         if (j === n) res.push(0);
//     }

//     return res;
// };
/* Apparently this is the most optimal way to do that */
function dailyTemperatures(temperatures: number[]): number[] {
    const answer: number[] = new Array(temperatures.length).fill(0);
    const stack: number[] = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (
            stack.length > 0 &&
            temperatures[stack[stack.length - 1]] < temperatures[i]
        ) {
            const idx = stack.pop()!;
            answer[idx] = i - idx;
        }

        stack.push(i);
    }

    return answer;
};
const temperatures: number[] = [73, 74, 75, 71, 69, 72, 76, 73];
console.log("Result:", dailyTemperatures(temperatures));