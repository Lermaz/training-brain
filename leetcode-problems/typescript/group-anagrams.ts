function groupAnagrams(strs: string[]): string[][] {
    let anagram = {}

    for (let s of strs) {
        let key = s.split('').sort().join('');
        if (!anagram[key]) {
            anagram[key] = []
        }
        anagram[key].push(s)
    }
    return Object.values(anagram);
};

const strs: string[] = ["eat", "tea", "tan", "ate", "nat", "bat"];
// [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log("Result:", groupAnagrams(strs));