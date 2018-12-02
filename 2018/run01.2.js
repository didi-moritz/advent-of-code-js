let fs = require('fs');

let lines = fs.readFileSync("run01.data");

let foo = (lines + "").split("\n");

let frequency = 0;
let found = [];
let result = null;

while (!result) {
    foo.some(element => {
        frequency += eval(element);
        if (found[frequency]) {
            result = frequency;
            return true;
        }
        found[frequency] = 1;
        return false;
    });
}
console.log(`result: ${result}`);