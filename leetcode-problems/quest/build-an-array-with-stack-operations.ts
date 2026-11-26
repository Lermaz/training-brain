/* This is how I do it */
// function buildArray(target: number[], n: number): string[] {
//     let mockArray = [];
//     let res = [];
//     let i = 0;
//     let count = 1;

//     while (i < target.length) {
//         if (target[i] === mockArray[i]) i++;

//         if (target[i] > mockArray[i]) {
//             mockArray.pop();
//             res.push("Pop");
//         }

//         if (target[i] !== mockArray[i]) {
//             mockArray.push(count);
//             res.push("Push");
//         } 

//         count++;
//     }
//     return res;
// };
/* Apparently this is the most optimal way to do that */
function buildArray(target: number[], n: number): string[] {
    let ans: string[] = [];
    let next = 1;

    for (let t of target){
        while (next < t){
            ans.push('Push','Pop');
            next++;
        }
        ans.push('Push');
        next++
    }

    return ans;
};

const target: number[] = [1, 3];
const n: number = 3;
console.log("Result:", buildArray(target, n));