const math = require('mathjs');
const fs = require('fs');

function baseToDecimal(value, base) {
    return parseInt(value, base);
}

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


fs.readFile('input2.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading the JSON file:", err);
        return;
    }

    const root = JSON.parse(data);
    const n = root.keys.n;
    const k = root.keys.k;

    let points = [];

   
    for (const key in root) {
        if (key === "keys") continue;

        const x = parseInt(key);
        const base = parseInt(root[key].base);
        const value = root[key].value;

        const y = baseToDecimal(value, base);
        points.push([x, y]);
    }

  
    const c = lagrangeInterpolation(points);
    console.log("Constant term c:", c);
});
