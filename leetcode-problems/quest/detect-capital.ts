function detectCapitalUse(word: string): boolean {
    const allUppercase = word.toUpperCase();
    const allLowercase = word.toLowerCase();
    const onlyFirstLetter = word[0].toUpperCase() + word.substring(1, word.length).toLowerCase();

    if (
        word === allUppercase ||
        word === allLowercase ||
        word === onlyFirstLetter
    ) return true;

    return false;
};

const word: string = "FlaG";
console.log("Result:", detectCapitalUse(word));