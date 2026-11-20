function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(" ");
    const seen = new Map();

    if (pattern.length !== words.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        const p = pattern[i];
        const w = words[i];

        const keyP = "p_" + p;
        const keyW = "w_" + w;

        if (seen.has(keyP) && seen.get(keyP) !== w) return false;
        if (seen.has(keyW) && seen.get(keyW) !== p) return false;

        seen.set(keyP, w);
        seen.set(keyW, p);
        console.log("seen", seen)
    }

    return true;    
};

const pattern: string = "abba";
const s: string = "dog cat cat dog";
console.log("Result:", wordPattern(pattern, s));