// const x = 10;
// if(x > 10){
//     console.log("larger than 10");
// }
// else{
//     console.log("smaller than or equal to 10");
// }
// const jhon = "jhon";
// const peter = "peter";
// module.exports = {jhon, peter};
const {readFileSync, writeFileSync} = require('fs');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first, second);

// creating new file 

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    // appending file
    {flag : 'a'}  
)

