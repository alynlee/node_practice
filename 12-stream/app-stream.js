const fs = require('fs');

//조금씩 읽어오기 때문에 event based
const data = [];

// const readStream = fs.createReadStream('./file.txt', {
//     //highWaterMark: 8, //64kbytes
//     encoding : 'utf-8'
// });

// readStream.on('data', (chunk) => {
//     //console.log(chunk);
//     data.push(chunk);
//     console.count('data');
// })

// readStream.on('end', () => {
//     console.log(data.join(''));
// })
// readStream.on('error', error=>{
//     console.log(error);
// })


//chaining
fs.createReadStream('./file.txt', {
    //highWaterMark: 8, //64kbytes
    encoding : 'utf-8'
}).on('data', (chunk) => {
        //console.log(chunk);
        data.push(chunk);
        console.count('data');
    })
    .on('end', () => {
        console.log(data.join(''));
    })
    .on('error', error=>{
        console.log(error);
    })