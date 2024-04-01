#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//step 1
const answers = await inquirer.prompt([
    { type: "number",
        name: "numberOne",
        message: "enter your first number"
    },
    { type: "number",
        name: "numberTwo",
        message: "enter your second number"
    },
    { type: "number",
        name: "operator",
        message: "enter your operator",
        choices: ["+", "-", "*", "/"] }
]);
//step2
const { numberOne, numbertwo, operator } = answers;
let result;
switch (operator) {
    case "+":
        result = numberOne + numbertwo;
        break;
    case "-":
        result = numberOne - numbertwo;
        break;
    case "*":
        result = numberOne * numbertwo;
        break;
    case "/":
        result = numberOne / numbertwo;
        break;
    default: console.log("Invalid Operator");
}
console.log(chalk.yellow('${numberOne} ${operator} ${numbertwo} = ${result} '));
