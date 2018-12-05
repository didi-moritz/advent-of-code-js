let fs = require('fs');

let fileData = fs.readFileSync("run05.data");

let lines = (fileData + "").split("\n").sort((a, b) => a.localeCompare(b));
let origChars = lines[1].trim().split("");


let result = 100000;
for (let cc = "a".charCodeAt(0); cc <= "z".charCodeAt(0); cc++) {
    let chars = origChars.slice(0);

    for (let i = 0; i < chars.length; i++) {
        let c = chars[i];
        if (c.toLowerCase().charCodeAt(0) == cc) {
            chars[i] = null;
        }
    }

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

    let currentResult = 0;
    chars.forEach(c => {
        if (c !== null) {
            currentResult++;
        }
    })

    if (currentResult < result) {
        result = currentResult;
    }

    console.log(`result for ${String.fromCharCode(cc)}: ${currentResult}`);
}

console.log(`result: ${result}`);