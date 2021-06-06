const { readFileSync,writeFileSync} = require('fs');
const ft = readFileSync('./content/first.txt','utf8');
const ft2 = readFileSync('./content/second.txt','utf8');

writeFileSync('./content/result.txt',`this is the result : ${ft} , ${ft}`);