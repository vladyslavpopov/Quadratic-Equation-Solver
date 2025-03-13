const fs = require('fs');
const readline = require('readline');

if (process.argv.length === 3) {
    const filePath = process.argv[2];

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`file ${filePath} does not exist`);
            process.exit(1);
        }

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading the file: ${err}`);
                process.exit(1);
            }

            const arguments = data.split(' ').map(Number);
            if (arguments.length !== 3 || arguments.some(isNaN)) {
                console.error('invalid file format');
                process.exit(1);
            }

            let [a, b, c] = arguments;

            if (a === 0) {
                console.error('Error. a cannot be 0');
                process.exit(1);
            }

            console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);
            findRoots(a, b, c);
        });
    });
} else {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const getNumber = (prompt, callback) => {
        rl.question(prompt, (input) => {
            const number = Number(input);
            if (isNaN(number)) {
                console.error(`Error. Expected a valid real number, got ${input} instead`);
                getNumber(prompt, callback);
            } else {
                callback(number);
            }
        });
    };

    getNumber('Enter a: ', (a) => {
        if (a === 0) {
            console.error('Error. a cannot be 0');
            rl.close();
            return;
        }

        getNumber('Enter b: ', (b) => {
            getNumber('Enter c: ', (c) => {
                console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);
                findRoots(a, b, c);
                rl.close();
            });
        });
    });
}

const findRoots = (a, b, c) => {
    const discriminant = b ** 2 - 4 * a * c;
    let x1, x2;

    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(`There are 2 roots\n x1 = ${x1}\n x2 = ${x2}`);
    } else if (discriminant === 0) {
        x1 = -b / (2 * a);
        console.log(`There are 1 root\n x1 = ${x1}`);
    } else {
        console.log("There are 0 roots");
    }
};
