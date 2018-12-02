let fs = require('fs');

let lines = fs.readFileSync("run01.data");

let foo = (lines + "").split("\n");

let sum = 0;
foo.forEach(element => {
    sum += eval(element);
});

console.log(`result: ${sum}`);