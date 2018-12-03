let fs = require('fs');

let fileData = fs.readFileSync("run03.data");

let lines = (fileData + "").split("\n");

let result = [];

let grid = [];

let nos = [];
let possibles = [];

lines.forEach(line => {
    let parts = line.split(" ");
    let id = parts[0].substring(1) * 1;
    let offsetPart = parts[2].substring(0, parts[2].length - 1);
    let offsets = offsetPart.split(",");
    let dims = parts[3].split("x");

    possibles[id] = 1;

    for (let i = 0; i < dims[0]; i++) {
        let x = offsets[0] * 1 + i;

        for (let j = 0; j < dims[1]; j++) {
            let y = offsets[1] * 1 + j;

            let key = x + "x" + y;
            let claimedId = grid[key];

            if (claimedId) {
                possibles[id] = 0;
                possibles[claimedId] = 0;
            } else {
                grid[key] = id;
            }
        }
    }
});

Object.keys(possibles).forEach(key => {
    if (possibles[key] > 0) {
        result.push(key);
    }
});

console.log(`result: ${result}`);