const fs= require('fs')
const writeStream= fs.createWriteStream('write.txt')
const readStream = fs.createReadStream('node.txt', {
    encoding: 'utf-8'
})
readStream.on('data', chunk =>{
    console.log(chunk)
    writeStream.write(chunk)
})

