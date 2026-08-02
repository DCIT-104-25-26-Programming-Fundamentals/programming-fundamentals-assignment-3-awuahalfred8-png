const readlineSync = require("readline-sync");

let tasks = [];

// Add a task
function addTask() {
    const task = readlineSync.question("Enter task: ");
    tasks.push(task);
    console.log(`Task added: "${task}"`);
}

// View all tasks
function viewTasks() {
    if (tasks.length === 0) {
        console.log("Your to-do list is empty.");
        return;
    }

    console.log("\nYour Tasks:");
    for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i]}`);
    }
}

// Delete a task
function deleteTask() {
    if (tasks.length === 0) {
        console.log("There are no tasks to delete.");
        return;
    }

    viewTasks();

    const taskNumber = readlineSync.questionInt("Enter task number to delete: ");

    if (taskNumber < 1 || taskNumber > tasks.length) {
        console.log("Error: Invalid task number.");
        return;
    }

    const removedTask = tasks[taskNumber - 1];
    tasks.splice(taskNumber - 1, 1);

    console.log(`Task "${removedTask}" has been removed.`);
}

// Display menu
function displayMenu() {
    console.log("\n============================");
    console.log("     TO-DO LIST MENU");
    console.log("============================");
    console.log("1. Add task");
    console.log("2. View tasks");
    console.log("3. Delete task");
    console.log("4. Quit");
}

// Main function
function main() {
    let choice;

    do {
        displayMenu();

        choice = readlineSync.questionInt("Enter your choice (1-4): ");

        switch (choice) {
            case 1:
                addTask();
                break;

            case 2:
                viewTasks();
                break;

            case 3:
                deleteTask();
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