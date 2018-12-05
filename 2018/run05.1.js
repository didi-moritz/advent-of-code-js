let fs = require('fs');

let fileData = fs.readFileSync("run05.data");

let lines = (fileData + "").split("\n").sort((a, b) => a.localeCompare(b));
let chars = lines[1].trim().split("");

let found = false;
do {
    let c = chars[0];
    let lastPos = 0;
    found = false;
    for (let i = 1; i < chars.length; i++) {
        let n = chars[i];
        if (n == null) {
            continue;
        }

        if (c !== null && n.toLowerCase() == c.toLowerCase() && n != c) {
            chars[i] = null;
            chars[lastPos] = null;
            found = true;
            c = null;
        } else {
            c = n;
            lastPos = i;
        }
    }
} while (found == true);

let result = 0;
chars.forEach(c => {
    if (c !== null) {
        result++;
    }
})

console.log(`result: ${result}`);