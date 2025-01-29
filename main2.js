const math = require('mathjs');
const fs = require('fs');

// Function to convert values from any base to base 10
function baseToDecimal(value, base) {
    return parseInt(value, base);
}

// Function to perform Lagrange interpolation to find the constant term 'c'
function lagrangeInterpolation(points) {
    let k = points.length;
    let constant = 0.0;

    for (let i = 0; i < k; i++) {
        let term = points[i][1];
        for (let j = 0; j < k; j++) {
            if (i !== j) {
                term *= (0.0 - points[j][0]) / (points[i][0] - points[j][0]);
            }
        }
        constant += term;
    }

    return constant;
}

// Read JSON input from input2.json
fs.readFile('input2.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading the JSON file:", err);
        return;
    }

    const root = JSON.parse(data);
    const n = root.keys.n;
    const k = root.keys.k;

    let points = [];

    // Decode the points
    for (const key in root) {
        if (key === "keys") continue;

        const x = parseInt(key);
        const base = parseInt(root[key].base);
        const value = root[key].value;

        const y = baseToDecimal(value, base);
        points.push([x, y]);
    }

    // Find the constant term 'c' using Lagrange Interpolation
    const c = lagrangeInterpolation(points);
    console.log("Constant term c:", c);
});
