const { readFile,writeFile} = require('fs')

console.log('start');
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err)
        {
            console.log(err);
            return;
        }
        const secound = result;
        writeFile('./content/result.txt',`this is the result : ${first} , ${secound}`
        ,(err,result)=>{
            if(err)
        {
            console.log(err);
            return;
        }  
        });
    })
})