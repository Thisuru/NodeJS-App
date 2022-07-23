// const fs = require('fs');
// fs.read

// synchronous way
const { readFileSync, writeFileSync, fstat } = require("fs");

console.log('Start');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first);
console.log(second);

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag:'a'}
)

console.log("Done with the task");
console.log("Starting the next one");
