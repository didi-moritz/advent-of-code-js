let fs = require('fs');

let fileData = fs.readFileSync("run02.data");

let lines = (fileData + "").split("\n");
let result = null;
for (let i = 0; i < lines.length && !result; i++) {
    let a = lines[i];
    for (let j = i + 1; j < lines.length && !result; j++) {
        let b = lines[j];
        let diffs = 0;
        let word = "";
        for (let k = 0; k < a.length; k++) {
            if (a.charAt(k) != b.charAt(k)) {
                diffs++;
            } else {
                word += a.charAt(k);
            }
        }

        if (diffs < 2) {
            result = word;
        }
    }
}

console.log(`result: ${result}`);