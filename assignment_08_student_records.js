const readlineSync = require("readline-sync");

let students = [];

// Calculate average score
function calculateAverage(scores) {
    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    return sum / scores.length;
}

// Add a student
function addStudent() {
    const name = readlineSync.question("Student name: ");
    const id = readlineSync.questionInt("Student ID: ");
    const numberOfScores = readlineSync.questionInt("How many scores? ");

    let scores = [];

    for (let i = 0; i < numberOfScores; i++) {
        scores.push(readlineSync.questionFloat(`Enter score ${i + 1}: `));
    }

    students.push({
        name: name,
        id: id,
        scores: scores
    });

    console.log(`Student "${name}" added successfully.`);
}

// Display all students
function displayStudents() {
    if (students.length === 0) {
        console.log("No student records found.");
        return;
    }

    console.log("\nStudent Records");
    console.log("-------------------------------------------------------------");

    for (let i = 0; i < students.length; i++) {
        const student = students[i];

        console.log(`Name: ${student.name}`);
        console.log(`ID: ${student.id}`);
        console.log(`Scores: ${student.scores.join(", ")}`);
        console.log(`Average: ${calculateAverage(student.scores).toFixed(2)}`);
        console.log("-------------------------------------------------------------");
    }
}

// Find a student's average
function findAverageById() {
    const id = readlineSync.questionInt("Enter student ID: ");

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            console.log(
                `${students[i].name}'s average score: ${calculateAverage(students[i].scores).toFixed(2)}`
            );
            return;
        }
    }

    console.log("Error: Student ID not found.");
}

// Display menu
function displayMenu() {
    console.log("\n================================");
    console.log("   STUDENT RECORD SYSTEM MENU");
    console.log("================================");
    console.log("1. Add student");
    console.log("2. Display all students");
    console.log("3. Calculate average score");
    console.log("4. Quit");
}

// Main program
function main() {
    let choice;

    do {
        displayMenu();

        choice = readlineSync.questionInt("Enter your choice (1-4): ");

        switch (choice) {
            case 1:
                addStudent();
                break;

            case 2:
                displayStudents();
                break;

            case 3:
                findAverageById();
                break;

            case 4:
                console.log("Goodbye!");
                break;

            default:
                console.log("Error: Invalid choice. Please enter a number between 1 and 4.");
        }

    } while (choice !== 4);
}

main();