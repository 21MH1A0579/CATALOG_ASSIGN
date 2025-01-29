# Shamir's Secret Sharing - Polynomial Reconstruction

## Problem Statement
In this assignment, you'll work on a simplified version of Shamir's Secret Sharing algorithm.

Consider an unknown polynomial of degree `m`. You would require `m+1` roots of the polynomial to solve for the coefficients, represented as `k = m + 1`.

An unknown polynomial of degree `m` can be represented as:

\[ f(x) = a_m x^m + a_{m-1} x^{m-1} + ... + a_1 x + c \]

Where:
- `f(x)` is the polynomial function
- `m` is the degree of the polynomial
- `a_m, a_{m-1}, ..., a_1, c` are coefficients (real numbers)
- `a_m ≠ 0` (since it's the highest degree term, ensuring the polynomial is of degree `m`)

The task is to find the **constant term** `c` of the polynomial with the given roots. The points are provided in JSON format.

---

## Sample Test Case
```json
{
    "keys": {
        "n": 4,
        "k": 3
    },
    "1": {
        "base": "10",
        "value": "4"
    },
    "2": {
        "base": "2",
        "value": "111"
    },
    "3": {
        "base": "10",
        "value": "12"
    },
    "6": {
        "base": "4",
        "value": "213"
    }
}
```

### Understanding the Input Format
- `n`: The number of roots provided in the given JSON.
- `k`: The minimum number of roots required to solve for the coefficients (`k = m + 1`).
- Each root is given in a specific base format.
- Convert each `value` from its respective base to decimal.

#### Example Root Conversion
```json
"2": {
    "base": "2",
    "value": "111"
}
```
- `x = 2` (key in JSON)
- `y = 111` (in base `2`)
- Convert `111` from base `2` to decimal → `7`
- The point becomes `(2, 7)`

---

## Methodology
You can use any known method to find the coefficients of the polynomial:
- **Lagrange Interpolation**
- **Matrix Method**
- **Gauss Elimination**

The goal is to compute the **constant term `c`** from the decoded roots.

---

## Second Test Case
```json
{
    "keys": {
        "n": 10,
        "k": 7
    },
    "1": {
        "base": "6",
        "value": "13444211440455345511"
    },
    "2": {
        "base": "15",
        "value": "aed7015a346d63"
    },
    "3": {
        "base": "15",
        "value": "6aeeb69631c227c"
    },
    "4": {
        "base": "16",
        "value": "e1b5e05623d881f"
    },
    "5": {
        "base": "8",
        "value": "316034514573652620673"
    },
    "6": {
        "base": "3",
        "value": "2122212201122002221120200210011020220200"
    },
    "7": {
        "base": "3",
        "value": "20120221122211000100210021102001201112121"
    },
    "8": {
        "base": "6",
        "value": "20220554335330240002224253"
    },
    "9": {
        "base": "12",
        "value": "45153788322a1255483"
    },
    "10": {
        "base": "7",
        "value": "1101613130313526312514143"
    }
}
```

---

## Assignment Checkpoints
1. **Read the Test Case (Input) from a JSON file**
   - Parse and read the input provided in JSON format.
   - Extract roots and their corresponding bases.

2. **Decode the Y Values**
   - Convert each `value` from its specified base to decimal.
   - Represent the decoded points as `(x, y)`.

3. **Find the Secret (c)**
   - Use the decoded roots and polynomial reconstruction methods.
   - Compute the constant term `c`.

---

## Constraints
- All coefficients (`a_m, a_{m-1}, ..., a_1, c`) are **positive integers**.
- Coefficients are within the range of a **256-bit number**.
- The number of provided roots (`n`) is always **greater than or equal to** `k`.
- The polynomial degree is `m = k - 1`.

---

## Output
Print the **constant term (secret)** for both test cases.

---

### Hint
Although you can't test your code in an automated environment, you can manually verify the results by solving the polynomial on paper and comparing outputs.

Good luck!
