/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
    let midx = m - 1;
    let nidx = n - 1;
    let rigth = m + n - 1;

    while (nidx >= 0) {
        if (midx >= 0 && nums1[midx] > nums2[nidx]) {
            nums1[rigth] = nums1[midx];
            midx--;
        } else {
            nums1[rigth] = nums2[nidx];
            nidx--;
        }
        rigth--;
    }

    return nums1
};

// function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
//     for (let i = m, j = 0; j < n; i++, j++) {
//         nums1[i] = nums2[j];
//     }

//     return nums1.sort((a, b) => a - b);
// };

const nums1 = [1,2,3,0,0,0]
const m = 3;
const nums2 = [2,5,6]
const n = 3
// [1,2,2,3,5,6]
console.log("Result:", merge(nums1, m, nums2, n))