function isTrianglePossible(side1, side2, side3) {
    if (side1 <= 0 , side2 <= 0 , side3 <= 0) {
        return false;
    }
    
    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
        return true; 
    } else {
        return false; 
    }
}


let sideA = 3;
let sideB = 4;
let sideC = 5;

if (isTrianglePossible(sideA, sideB, sideC)) {
    console.log("Трикутник можливий з цих сторін.");
} else {
    console.log("Трикутник не можливий з цих сторін.");
}


function solveQuadraticEquation(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    let result = [];

    if (discriminant > 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result.push(x1, x2);
    } else if (discriminant === 0) {
        let x = -b / (2 * a);
        result.push(x);
    } else {
        result.push("No real roots");
    }

    return result;
}


let a = 1;
let b = -3;
let c = 2;

let roots = solveQuadraticEquation(a, b, c);
console.log("Корені квадратного рівняння:", roots);
