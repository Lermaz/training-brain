function isHappy(n: number): boolean {
    let visit = new Set();
    
    let getNextNumber = function(n) {
        let output = 0;
        
        while (n > 0) {
            let digit = n % 10;
            output += digit * digit;
            n = Math.floor(n / 10);
        }
        
        return output;
    };

    while (!visit.has(n)) {
        visit.add(n);
        n = getNextNumber(n);
        if (n === 1) {
            return true;
        }
    }

    return false;    
};

const n: number = 2;
console.log("Result:", isHappy(n));