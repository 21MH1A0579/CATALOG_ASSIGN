# Shamir's Secret Sharing - Polynomial Reconstruction

## Problem Statement
In this assignment, you'll reconstruct the constant term `c` of an unknown polynomial using given roots. The roots are provided in JSON format, where `k = m + 1` (minimum required points to solve for coefficients).

## Input Format
The input JSON contains:
- `n`: Number of provided roots.
- `k`: Minimum roots required.
- Roots given as `{ "x": { "base": "b", "value": "v" } }`.
- Convert `value` from base `b` to decimal to get `(x, y)` pairs.

### Example Input
```json
{
    "keys": { "n": 4, "k": 3 },
    "1": { "base": "10", "value": "4" },
    "2": { "base": "2", "value": "111" },
    "3": { "base": "10", "value": "12" },
    "6": { "base": "4", "value": "213" }
}
```

### Example Conversion
```json
"2": { "base": "2", "value": "111" }
```
- `x = 2`, `y = 111` (base `2` → decimal `7`)
- `(2, 7)`

## Solution Approach
Use polynomial reconstruction methods like:
- **Lagrange Interpolation**
- **Matrix Method**
- **Gauss Elimination**

## Running the Code
Two separate scripts handle different test cases:

### Test Case 1 (input1.json)
#### In main.js, ensure the following line is present:
`const jsonData = fs.readFileSync('input1.json', 'utf8')`
# Run the script:
Run `main.js`:
```sh
node main.js
```

### Test Case 2 (input2.json)
#### In main.js, ensure the following line is present:
`const jsonData = fs.readFileSync('input1.json', 'utf8')`
#### change it to input2.json and 
# Run the script:
`main2.js`:
```sh
node main2.js
```

## Constraints
- Coefficients are **positive integers**.
- Values fit within a **256-bit number**.
- Provided roots `n ≥ k`.
- Polynomial degree is `m = k - 1`.

## Output
The output will be displayed.


