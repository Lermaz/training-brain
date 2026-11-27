function repeatedSubstringPattern(s: string): boolean {
    const doubledString: string = s + s;
    const startIndex: number = 1;
    const endIndex: number = (s.length << 1) - 1;
    const slicedString: string = doubledString.slice(startIndex, endIndex);
  
    return slicedString.includes(s);
};

const s: string = "abab";
console.log("Result:", repeatedSubstringPattern(s));