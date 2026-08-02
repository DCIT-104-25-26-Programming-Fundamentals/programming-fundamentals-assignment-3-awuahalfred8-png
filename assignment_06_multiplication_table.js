const readlineSync = require("readline-sync");

// Part A - Print the multiplication table for one number
function printTable(number) {
    console.log(`\nMultiplication Table for ${number}:`);

    for (let i = 1; i <= 12; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// Part B - Print multiplication tables from 1 to N
function printTablesUpToN(n) {
    for (let i = 1; i <= n; i++) {
        printTable(i);

        if (i < n) {
            console.log("---------------------------");
        }
    }
}

// Main function
function main() {
    // Part A
    const number = readlineSync.questionInt("Enter a number: ");

    if (number <= 0) {
        console.log("Error: Number must be greater than 0.");
        return;
    }

    printTable(number);

    // Part B
    const n = readlineSync.questionInt("\nEnter a number N: ");

    if (n <= 0) {
        console.log("Error: Number must be greater than 0.");
        return;
    }

    console.log();
    printTablesUpToN(n);
}

main();