const VOWELS = new Set(["a", "e", "i", "o", "u", "y"]);

function solution(pattern: string, source: string) {
    let matches: number = 0;

    for (let i = 0; i <= source.length - pattern.length; i++) {
        let ok = true;

        for (let j = 0; j < pattern.length; j++) {
            const isVowel = VOWELS.has(source[i + j]!);
            if ((pattern[j] === "0") !== isVowel) {
                ok = false;
                break;
            }
        }

        if (ok) matches++;
    }

    return matches;
}

const pattern: string = "010";
const source: string = "amazing";
console.log("Result: ", solution(pattern, source));