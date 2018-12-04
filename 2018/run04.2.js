let fs = require('fs');

let fileData = fs.readFileSync("run04.data");

let lines = (fileData + "").split("\n").sort((a, b) => a.localeCompare(b));

let guard = null;
let sleep = -1;
let sleepings = [];

lines.forEach(line => {
    let match = line.match(/#([^ ]+)/);
    if (match) {
        guard = match[1] * 1;
        sleep = -1;
        return;
    }

    let minute = line.match(/:0?(.+)\]/)[1] * 1;
    
    if (line.indexOf("asleep") > 0) {
        sleep = minute;
        return;
    }

    if (line.indexOf("wakes") > 0) {
        for (let i = sleep; i < minute; i++) {
            if (!sleepings[guard]) {
                sleepings[guard] = [];
            }

            sleepings[guard][i] = (sleepings[guard][i] ? sleepings[guard][i] : 0) + 1;
        }
        return;
    }

    console.error("Oh no!");
});

let sleepyGuard = null;
let sleepyMinute = -1;
let sleepyMinutes = -1;
Object.keys(sleepings).forEach(guard => {
    Object.keys(sleepings[guard]).forEach(minute => {
        let minutes = sleepings[guard][minute];
        if (minutes > sleepyMinutes) {
            sleepyMinutes = minutes;
            sleepyGuard = guard;
            sleepyMinute = minute;
        }
    })
});

let result = sleepyMinute * sleepyGuard;

console.log(`result: ${sleepyGuard} on ${sleepyMinute} => ${result}`);