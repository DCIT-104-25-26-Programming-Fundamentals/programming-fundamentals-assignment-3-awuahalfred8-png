const readlineSync = require("readline-sync");

// Part A - Print the first N Fibonacci terms
function printFibonacci(n) {
    if (n <= 0) {
        console.log("Error: Number of terms must be greater than 0.");
        return;
    }

    let a = 0;
    let b = 1;
    let sequence = "";

    for (let i = 1; i <= n; i++) {
        sequence += a + " ";

        let next = a + b;
        a = b;
        b = next;
    }

    console.log("Fibonacci sequence: " + sequence.trim());
}

// Part B - Check if a number is a Fibonacci number
function isFibonacci(number) {
    if (number < 0) {
        return false;
    }

    let a = 0;
    let b = 1;

    while (a < number) {
        let next = a + b;
        a = b;
        b = next;
    }

    return a === number;
}

// Main function
function main() {
    // Part A
    const n = readlineSync.questionInt("How many terms? ");
    printFibonacci(n);

    // Part B
    const number = readlineSync.questionInt("\nEnter a number to check: ");

    if (isFibonacci(number)) {
        console.log(number + " is a Fibonacci number.");
    } else {
        console.log(number + " is NOT a Fibonacci number.");
    }
}

main();