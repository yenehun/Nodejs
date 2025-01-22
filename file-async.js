const {readFile,writeFile}=require('fs')
console.log(1);

readFile("./content/first.txt","utf8",(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first=result
    readFile("./content/second.txt","utf8",(err,result)=>{
       if(err){
            console.log(err);
            return
        }
        const second=result 

        writeFile("content/result-async.txt",`Here is the result : ${first}, ${second}`,{flag:'a'},(err,result)=>{
           if(err){
                console.log(err);
                return
            }
        console.log(result);
        })
        console.log(2);
    })
    console.log(3);
})
console.log(4);
// const second=readFile("./content/second.txt","utf-8")
// console.log(first,second);

// writeFile("content/result-sync.txt",`Here is the result : ${first}, ${second}`,{flag:'a'})

