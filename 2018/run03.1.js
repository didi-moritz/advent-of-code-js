let fs = require('fs');

let fileData = fs.readFileSync("run03.data");

let lines = (fileData + "").split("\n");

let result = 0;

let grid = [];

lines.forEach(line => {
    let parts = line.split(" ");
    let offsetPart = parts[2].substring(0, parts[2].length - 1);
    let offsets = offsetPart.split(",");
    let dims = parts[3].split("x");

    for (let i = 0; i < dims[0]; i++) {
        let x = offsets[0] * 1 + i;

        for (let j = 0; j < dims[1]; j++) {
            let y = offsets[1] * 1 + j;

            let key = x + "x" + y;
            let currentValue = grid[key] ? grid[key] : 0;

            grid[key] = currentValue + 1;
        }
    }
});

Object.keys(grid).forEach(key => {
    if (grid[key] > 1) {
        result++;
    }
});

console.log(`result: ${result}`);