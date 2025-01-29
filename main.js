const math = require('mathjs');
const fs = require('fs');

function baseToDecimal(value, base) {
    return parseInt(value, base);
}

function lagrangeInterpolation(points) {
    let k = points.length;
    let constant = 0;

    for (let i = 0; i < k; i++) {
        let term = points[i][1];
        for (let j = 0; j < k; j++) {
            if (i !== j) {
                term *= (0 - points[j][0]) / (points[i][0] - points[j][0]);
            }
        }
        constant += term;
    }

    return constant;
}


const jsonData = fs.readFileSync('input1.json', 'utf8');
const root = JSON.parse(jsonData);

const n = root.keys.n;
const k = root.keys.k;

let points = [];


for (let key in root) {
    if (key === "keys") continue;

    let x = parseInt(key);
    let base = parseInt(root[key].base);
    let value = root[key].value;

    let y = baseToDecimal(value, base);
    points.push([x, y]);
}

let c=lagrangeInterpolation(points);
console.log("Constant term c:", c);
