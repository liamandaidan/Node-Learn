const { readFileSync, writeFileSync } = require('fs');
//read both files
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/sub/test.txt', 'utf8');
console.log(first, second);
//write to file.
writeFileSync('./content/results-sync.txt', 
`Here is the results ${first}, ${second}`,
{flag: 'a'}) //flag a will add on to the end rather than overwrite