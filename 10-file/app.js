const fs = require('fs') //filesystem 모듈


//fs는 3가지 형태로 제공됨
//sync는 안사용하는게 좋음
//rename(..., callback(error, data)) 비동기
//try {renameSync (...) } catch(e) {} blocking
//promises.rename.then().catch(0) 프로미스..?
//상대경로는 node가 실행되는 폴더 기준으로 잡힘
try{
    fs.renameSync('./text.txt', './file-new.txt');
}catch (error) {
    console.error(error);
}

fs.rename('./text-new.txt', './text.txt', (error) => {
    console.log(error);
});
console.log('hello');

fs.promises
.rename('./file-new.txt', './text-new.txt')
.then(()=>console.log('Done!'))
.catch(console.error)