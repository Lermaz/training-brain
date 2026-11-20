function isAnagram(s: string, t: string): boolean {
    const counter = new Map();
    
    if (s.length !== t.length) return false;
    
    for (let char of s) {
        counter.set(char, (counter.get(char) || 0) + 1);
    }

    for (let char of t) {
        if (!counter.has(char) || counter.get(char) === 0) {
            return false;
        }
        counter.set(char, counter.get(char) - 1);
    }

    return true;
};

const s: string = "anagram";
const t: string = "nagaram";
console.log("Result:", isAnagram(s, t));