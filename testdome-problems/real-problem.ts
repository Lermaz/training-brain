type Layer = boolean[][];
type Stack = Layer[];

class Cube { 
    private stack: Stack = [];

    constructor(
        private readonly row: number,
        private readonly column: number,
    ) {}

    addCube(cubes: Layer): void {
        this.validateLayer(cubes);
        this.stack.push(this.createEmptyLayer());

        for (let j = 0; j < this.row; j++) {
            for (let k = 0; k < this.column; k++) {
                if (!cubes[j]![k]) continue;

                for (const layer of this.stack) {
                    const row = layer[j]!;
                    if (!row[k]) {
                        row[k] = true;
                        break;
                    }
                }
            }
        }

        this.stack = this.stack.filter(
            (layer) => !this.isFull(layer) && !this.isEmpty(layer),
        );
    }

    getHeight(): number {
        return this.stack.length;
    }

    private createEmptyLayer(): Layer {
        return Array.from({ length: this.row }, () =>
            Array<boolean>(this.column).fill(false),
        );
    }

    private isFull(layer: Layer): boolean {
        return layer.every((r) => r.every(Boolean));
    }

    private isEmpty(layer: Layer): boolean {
        return layer.every((r) => r.every((cell) => !cell));
    }

    private validateLayer(layer: Layer): void {
        const validShape =
            layer.length === this.row &&
            layer.every((r) => r.length === this.column);

        if (!validShape) {
            throw new Error(`La capa debe ser de ${this.row} x ${this.column}`);
        }
    }
}

const cube = new Cube(2, 2);
cube.addCube([
    [true, true],
    [false, false]
])
console.log(cube.getHeight());
cube.addCube([
    [false, false],
    [true, false]
])
console.log(cube.getHeight());
cube.addCube([
    [true, true],
    [true, false]
])
console.log(cube.getHeight());
cube.addCube([
    [true, true],
    [true, false]
])
console.log(cube.getHeight());
cube.addCube([
    [true, true],
    [true, true]
])
console.log(cube.getHeight());