function countStudents(students: number[], sandwiches: number[]): number {
    let count = 0;

    while (count < students.length) {
        if (students[0] === sandwiches[0]) {
            count = 0;
            students.shift();
            sandwiches.shift();
        } else {
            count++;
            students.push(students.shift());
        }
    }

    return students.length;
};

const students: number[] = [1, 1, 0, 0];
const sandwiches: number[] = [0, 1, 0, 1];
console.log("Result:", countStudents(students, sandwiches));