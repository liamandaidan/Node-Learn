const { readFileSync, writeFileSync, readFile, writeFile } = require('fs');
//read both files
readFile('./content/first.txt','utf8', (err, result) =>{
    if(err){
        console.log(err)
        return
    }
    console.log(result);
    const first = result;
    readFile('./content/sub/test.txt', 'utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', 
        `I'm writing to file: ${first}, ${second}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        })
    })
})