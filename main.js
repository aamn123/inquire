import inquirer from "inquirer"; // install inquirer  old version so that it works 
// npm i inquirer@9.3.6           and         npm install --save-dev @types/inquirer
import chalk from "chalk";
let { num1, num2, operation } = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter first number?",
    },
    {
        name: "num2",
        type: "number",
        message: "Enter second number?",
    },
    {
        name: "operation",
        type: "list",
        choices: ["multiplication", "division", "subtraction", "Addition"],
        message: "Enter your operation ",
    },
]);
if (operation === 'Addition') {
    console.log(chalk.bgCyan.yellow `the sum of two number is = ${num1 + num2}`);
}
else if (operation === 'subtraction') {
    console.log(chalk.bgCyan.yellow `the subtraction of two number is =${num1 - num2}`);
}
else if (operation === 'division') {
    console.log(chalk.bgCyan.yellow `the division of two number is =${num1 / num2}`);
}
else
    (operation === 'multiplication');
{
    console.log(chalk.redBright `the multiplication of two number is =${num1 * num2}`);
}
