class MaxHeap {
  private data: number[] = [];

    peek(): number {
        return this.data[0];
    }

    push(value: number): void {
        const d = this.data;
        d.push(value);
        let i = d.length - 1;
        while (i > 0) {
            const parent = (i - 1) >> 1;
            if (d[parent] >= d[i]) break;
            [d[parent], d[i]] = [d[i], d[parent]];
            i = parent;
        }
    }

    pop(): number {
        const d = this.data;
        const top = d[0];
        const last = d.pop()!;
        if (d.length > 0) {
            d[0] = last;
            let i = 0;
            while (true) {
                const left = 2 * i + 1;
                const right = left + 1;
                let largest = i;
                if (left < d.length && d[left] > d[largest]) largest = left;
                if (right < d.length && d[right] > d[largest]) largest = right;
                if (largest === i) break;
                [d[largest], d[i]] = [d[i], d[largest]];
                i = largest;
            }
        }
        return top;
    }
}

function isPossible(target: number[]): boolean {
    const heap = new MaxHeap();
    let sum = 0;

    for (const n of target) {
        sum += n;
        heap.push(n);
    }

    while (heap.peek() !== 1) {
        const largest = heap.pop();
        const rest = sum - largest;

        if (rest < 1 || largest <= rest) return false;
        if (rest === 1) return true;

        const prev = largest % rest;
        if (prev === 0) return false;

        sum = rest + prev;
        heap.push(prev);
    }

    return true;
}

const target: number[] = [8,5];
console.log("Result:", isPossible(target))