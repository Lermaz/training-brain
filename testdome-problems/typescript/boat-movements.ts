function canTravelTo(
    gameMatrix: boolean[][],
    fromRow: number,
    fromColumn: number,
    toRow: number,
    toColumn: number
): boolean {
    if (!gameMatrix || gameMatrix.length === 0 || !gameMatrix[0]) {
        return false;
    }

    const rowCount = gameMatrix.length;
    const colCount = gameMatrix[0].length;

    if (
        fromRow < 0 || fromRow >= rowCount ||
        fromColumn < 0 || fromColumn >= colCount ||
        toRow < 0 || toRow >= rowCount ||
        toColumn < 0 || toColumn >= colCount
    ) {
        return false;
    }

    if (!gameMatrix[toRow]![toColumn]) {
        return false;
    }

    const rowDiff = toRow - fromRow;
    const colDiff = toColumn - fromColumn;

    if (
        (rowDiff === -1 && colDiff === 0) ||
        (rowDiff === 1 && colDiff === 0) ||
        (rowDiff === 0 && colDiff === -1) ||
        (rowDiff === 0 && colDiff === 1)
    ) {
        return true;
    }

    if (rowDiff === 0 && colDiff === 2) {
        if (gameMatrix[fromRow]![fromColumn + 1]) {
            return true;
        }
    }

    return false;
}

const gameMatrix = [
  [false, true,  true,  false, false, false],
  [true,  true,  true,  false, false, false],
  [true,  true,  true,  true,  true,  true],
  [false, true,  true,  false, true,  true],
  [false, true,  true,  true,  false, true],
  [false, false, false, false, false, false],
];

console.log(canTravelTo(gameMatrix, 3, 2, 2, 2)); // true, Valid move
console.log(canTravelTo(gameMatrix, 3, 2, 3, 4)); // false, Can't travel through land
console.log(canTravelTo(gameMatrix, 3, 2, 6, 2)); // false, Out of bounds