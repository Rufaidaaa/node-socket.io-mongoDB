const fs= require('fs')
// read file
// fs.readFile('node.txt' , (err, data) =>{
//     if(err){
//         console.log(err)
//     }else{
//         // console.log(data.toString())
//         console.log(data)
//     }
// })
// write file
// fs.writeFile('node.txt' ,'A new message' ,(err, data) =>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('Message created')
//     }
// })
// append file
// fs.appendFile('node.txt' ,'A new message 2\r\n' ,(err, data) =>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('Message created')
//     }
// })
if(!fs.existsSync('new folder')){
fs.mkdir('new folder' ,(err, data) =>{
    if(err){
        console.log(err)
    }else{
        console.log('folder created')
    }
})
}else{
  console.log("folder already exist")
}


