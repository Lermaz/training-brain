function exclusiveTime(n: number, logs: string[]): number[] {
    const result: number[] = Array(n).fill(0);
    let previousTimestamp: number = 0;
    const functionStack: number[] = [];
  
    for (const logEntry of logs) {
        const logParts: string[] = logEntry.split(':');
        const functionId: string = logParts[0];
        const operation: string = logParts[1];
        const currentTimestamp: string = logParts[2];

        if (operation[0] === 's') {
            if (functionStack.length > 0) {
                const topFunctionId: number = functionStack[functionStack.length - 1];
                result[topFunctionId] += Number(currentTimestamp) - previousTimestamp;
            }
          
            functionStack.push(Number(functionId));
            previousTimestamp = Number(currentTimestamp);
        } else {
            const poppedFunctionId: number = functionStack.pop()!;
            result[poppedFunctionId] += Number(currentTimestamp) - previousTimestamp + 1;
            previousTimestamp = Number(currentTimestamp) + 1;
        }
    }
  
    return result;
};

const n: number = 2;
const logs: string[] = ["0:start:0", "1:start:2", "1:end:5", "0:end:6"];
console.log("Result:", exclusiveTime(n, logs));