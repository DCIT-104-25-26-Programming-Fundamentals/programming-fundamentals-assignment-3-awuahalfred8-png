const readlineSync = require('readline-sync');

// Function to read a matrix
function readMatrix(rows, cols, name) {
    let matrix = [];

    console.log(`Enter values for Matrix ${name}:`);

    for (let i = 0; i < rows; i++) {
        let row = readlineSync.question(`Enter row ${i + 1}: `)
            .split(' ')
            .map(Number);

        while (row.length !== cols) {
            console.log(`Please enter exactly ${cols} numbers.`);
            row = readlineSync.question(`Enter row ${i + 1}: `)
                .split(' ')
                .map(Number);
        }

        matrix.push(row);
    }

    return matrix;
}

// Function to display a matrix
function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join("\t"));
    }
}

// Part A - Transpose
function transposeMatrix(matrix) {
    let transpose = [];

    for (let j = 0; j < matrix[0].length; j++) {
        transpose[j] = [];

        for (let i = 0; i < matrix.length; i++) {
            transpose[j][i] = matrix[i][j];
        }
    }

    return transpose;
}

// Part B - Addition
function addMatrices(matrixA, matrixB) {
    let result = [];

    for (let i = 0; i < matrixA.length; i++) {
        result[i] = [];

        for (let j = 0; j < matrixA[0].length; j++) {
            result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }

    return result;
}

// Part C - Multiplication
function multiplyMatrices(matrixA, matrixB) {
    let result = [];

    for (let i = 0; i < matrixA.length; i++) {
        result[i] = [];

        for (let j = 0; j < matrixB[0].length; j++) {
            result[i][j] = 0;

            for (let k = 0; k < matrixA[0].length; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return result;
}

// =====================
// Part A - Transpose
// =====================
console.log("\n=== PART A: TRANSPOSE MATRIX ===");

let rows = readlineSync.questionInt("Enter number of rows: ");
let cols = readlineSync.questionInt("Enter number of columns: ");

let matrix = readMatrix(rows, cols, "");

console.log("\nOriginal Matrix:");
displayMatrix(matrix);

console.log("\nTransposed Matrix:");
displayMatrix(transposeMatrix(matrix));

// =====================
// Part B - Addition
// =====================
console.log("\n=== PART B: ADD MATRICES ===");

rows = readlineSync.questionInt("Enter number of rows: ");
cols = readlineSync.questionInt("Enter number of columns: ");

let matrixA = readMatrix(rows, cols, "A");
let matrixB = readMatrix(rows, cols, "B");

console.log("\nSum Matrix:");
displayMatrix(addMatrices(matrixA, matrixB));

// =====================
// Part C - Multiplication
// =====================
console.log("\n=== PART C: MULTIPLY MATRICES ===");

let rowsA = readlineSync.questionInt("Enter rows of Matrix A: ");
let colsA = readlineSync.questionInt("Enter columns of Matrix A: ");

matrixA = readMatrix(rowsA, colsA, "A");

let rowsB = readlineSync.questionInt("Enter rows of Matrix B: ");
let colsB = readlineSync.questionInt("Enter columns of Matrix B: ");

if (colsA !== rowsB) {
    console.log("Error: Matrix multiplication is not possible.");
} else {
    matrixB = readMatrix(rowsB, colsB, "B");

    console.log("\nProduct Matrix:");
    displayMatrix(multiplyMatrices(matrixA, matrixB));
}