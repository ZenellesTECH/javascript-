//modules are house/single or multiple files containing some js code.To organize your code in a way to reuse them
//const fs = require('fs') // 
//const http = require('http')//

const fs =require ('fs')
fs.readFile('./example.txt','utf8', (err, data) =>{
    if (err) {
        console.log(err.message)
    }
    console.log(data)
})

//const writeData = (content) =>{
    //fs.writeFile('./example.txt',content,(err)=>{
       // if (err) {
           // console.log(err.message)
       // }
        console.log("File write Successful")
    //})
//}
//writeData("Sample data written into file")

const writeData = (content) =>{
    fs.appendFile('./example.txt',content,(err)=>{
        if (err) {
            console.log(err.message)
        }
        console.log("File write Successful")
    })
}
writeData("\n new line being added to the file")
writeData("\n new line being added to the file by admin")
writeData("\n new line being added to the file by user")