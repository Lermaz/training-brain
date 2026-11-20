// function twoSum(numbers: number[], target: number): number[] {
//     let res: number[] = [];
//     let j = 1;

//     for (let i = 0; i < numbers.length; i++) {
//         while (j < numbers.length) {
//             if (target === numbers[i] + numbers[j]) {
//                 res = [i + 1, j + 1];
//                 return res;
//             }
//             j++;
//         }
//         j = i + 2;
//     }
//     return res;
// };

function twoSum(numbers: number[], target: number): number[] {
    let i = 0;
    let j = numbers.length - 1;

    while (i < j) {
        let sum = numbers[i] + numbers[j];
        if (target === sum) {
            return [i + 1, j + 1];
        }

        if (target > sum) {
            i++;
        } else {
            j--;
        }
    }
};

const numbers: number[] = [2,7,11,15];
const target: number = 9
console.log("Result:", twoSum(numbers, target))