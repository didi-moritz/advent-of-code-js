let fs = require('fs');

let fileData = fs.readFileSync("run02.data");

let lines = (fileData + "").split("\n");

let twices = 0;
let thrices = 0;

lines.forEach(line => {
    let bucket = [];
    line.split("").forEach(c => {
        bucket[c] = (bucket[c] ? bucket[c] : 0) + 1;
    });

    if (Object.keys(bucket).some(key => {
        return bucket[key] == 2;
    })) {
        twices++;
    }

    if (Object.keys(bucket).some(key => {
        return bucket[key] == 3;
    })) {
        thrices++;
    }
});

console.log(`result: ${twices} x ${thrices} = ${twices * thrices}`);