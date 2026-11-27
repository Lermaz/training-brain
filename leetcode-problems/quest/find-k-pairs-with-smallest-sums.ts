function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    if (!nums1.length || !nums2.length) return [];
    let pairs: number[][] = [];

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            pairs.push([nums1[i], nums2[j]]);
        }
    }

    pairs.sort((a: number[], b: number[]) => (a[0] + a[1]) - (b[0] + b[1]));

    let res: number[][] = [];
    for (let i = 0; i < Math.min(k, pairs.length); i++) {
        res.push([pairs[i][0], pairs[i][1]]);
    }

    return res;
};

const nums1: number[] = [1,2,4,5,6];
const nums2: number[] = [3,5,7,9];
const k: number = 20;
console.log("Result:", kSmallestPairs(nums1, nums2, k));