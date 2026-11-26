class MyQueue {
    private input: number[] = [];
    private output: number[] = [];
    constructor() {
        
    }

    push(x: number): void {
        this.input.push(x);
    }

    pop(): number {
        this.peek();
        return this.output.pop();
    }

    peek(): number {
        if (!this.output.length) {
            while (this.input.length) {
                this.output.push(this.input.pop());
            }
        }

        return this.output[this.output.length - 1];
    }

    empty(): boolean {
        return !this.input.length && !this.output.length;
    }
}

let obj = new MyQueue()
obj.push(1)
obj.push(2)
let param_2 = obj.peek()
let param_3 = obj.pop()
let param_4 = obj.empty()