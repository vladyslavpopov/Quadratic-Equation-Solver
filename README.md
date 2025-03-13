# Quadratic Equation Solver

## Description

This is a console programm that solves quadratic equations of the form:

`a * x^2 + b * x + c = 0`

The application can run in two modes:
1. **Interactive Mode**: The program prompts the user to input the arguments `a`, `b`, and `c` interactively via the terminal. The program will then solve the quadratic equation and output the results.
2. **Non-Interactive Mode (File Mode)**: The program reads the arguments from a specified text file, solves the quadratic equation, and prints the results.

## Before starting

Clone this repository via command:
```
git clone https://github.com/vladyslavpopov/Quadratic-Equation-Solver.git
```

## Running the Application
### Interactive Mode

To run the application in interactive mode, simply run the following command:
```
node QEsolver.js
```

This will prompt the user to input the arguments a, b, and c one by one.

### Non-Interactive Mode

To run the application in non-interactive mode, provide the path to a text file containing the arguments as command-line argument:
```
node QEsolver.js arguments.txt
```

#### File Format for Non-Interactive Mode

The text file must contain exactly three numbers (arguments a, b, and c) separated by spaces. The format should look like this:
```
1 -5 6
```

The file should not contain any additional lines or characters. Each coefficient should be a valid real number. If the file format is incorrect, the program will output an error and terminate.

### Instance for Interactive Mode
User inputs parameters `a`, `b`, `c` with values `9`, `-12`, `4`
The result will be:
```
Enter a: 9
Enter b: -12
Enter c: 4
Equation is: (9) x^2 + (-12) x + (4) = 0
There are 1 root
 x1 = 0.6666666666666666
```

### Instance for Non-Interactive Mode:

For a file arguments.txt with the content:

`1 -3 2`

The output will be:

```
Equation is: (1) x^2 + (-3) x + (2) = 0
There are 2 roots
 x1 = 2
 x2 = 1
```

## [Revert commit](https://github.com/vladyslavpopov/Quadratic-Equation-Solver/commit/ef2e60ba7416c9a1719403c4c26d89f693836d88)
