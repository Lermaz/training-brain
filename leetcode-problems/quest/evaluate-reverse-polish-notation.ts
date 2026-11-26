function evalRPN(tokens: string[]): number {
    const n = tokens.length;
    const operations = {
        '+': '+',
        '-': '-',
        "*": "*",
        '/': "/",
    }
    let stack = [];
    
    for (let i = 0; i < n; i++) {
        let res = 0;

        switch (operations[tokens[i]]) {
            case '+':
                res = Number(stack[stack.length - 2]) + Number(stack[stack.length - 1]);
                break;
            case '-':
                res = Number(stack[stack.length - 2]) - Number(stack[stack.length - 1]);
                break;
            case '*':
                res = Number(stack[stack.length - 2]) * Number(stack[stack.length - 1]);
                break;
            case '/':
                res = Math.trunc(Number(stack[stack.length - 2]) / Number(stack[stack.length - 1]));
                break;
            default:
                res = Number(tokens[i]);
                break;
        }

        if (operations[tokens[i]]) stack.splice(stack.length - 2, 2);
        stack.push(res)
    }

    return stack[0];
};

const tokens: string[] = ["18"];
console.log("Result:", evalRPN(tokens));