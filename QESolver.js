const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter a: ', (a) => {
    rl.question('Enter b: ', (b) => {
        rl.question('Enter c: ', (c) => {
            a = Number(a);
            b = Number(b);
            c = Number(c);

            console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);

            findRoots(a, b, c);
            rl.close();
        })
    })
})

const findRoots = (a, b, c) => {
    const discriminant = b ** 2 - 4 * a * c;
    let x1, x2;

    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / 2 * a;
        x2 = (-b - Math.sqrt(discriminant)) / 2 * a;
        console.log(`There are 2 roots\n x1 = ${x1}\n x2 = ${x2}`);
    } else if (discriminant === 0) {
        x1 = -b / 2 * a;
        console.log(`There are 1 roots\n x1 = ${x1}`);;
    } else {
        return console.log("There are 0 roots");
    }
}
