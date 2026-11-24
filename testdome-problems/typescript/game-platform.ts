function calculateFinalSpeed(initialSpeed: number, inclinations: number[]): number {
    let speed: number = initialSpeed;
    for (const inc of inclinations) {
        speed -= inc;
        if (speed <= 0) return 0;
    }
    return speed;
}

console.log(calculateFinalSpeed(60, [0, 30, 30, -45, -45, 0]));