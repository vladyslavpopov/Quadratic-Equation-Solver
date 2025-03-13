const findRoots = (a, b, c) => {
    const discriminant = b ** 2 - 4 * a * c;
    let x1, x2;

    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / 2 * a;
        x2 = (-b - Math.sqrt(discriminant)) / 2 * a;
        console.log(`x1 = ${x1}, x2 = ${x2}`);
    } else if (discriminant === 0) {
        x1 = x2 = -b / 2 * a;
        console.log(`x1 = ${x1}, x2 = ${x2}`);
    } else {
        return console.log("There is no roots to find")
    }
}

findRoots(1, -26, 120);