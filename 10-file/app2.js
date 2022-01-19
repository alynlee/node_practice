//항상 API를 사용할때는 인자는 어떤것들이 있는지
//추가적으로 전달해야하는 option 같은게 있는지
//return이 어떻게 전달 되는지
//promise라면 catch로 error를 잡아내는 것이 중요하다

const fs = require('fs').promises; //fs는 fs 모듈안의 promise들을 가리키고 있다.


//read a file
//txt를 buffer의 형태로 읽어옴
// fs.readFile('./text.txt')
//     .then((data) => console.log(data))
//     .catch(console.error);

//encoding 형식을 지정해줄 수 있다. 
//then을 통해 순서를 부여할 수 있다.
fs.readFile('./text.txt', 'utf8') //ddfshsdfkjhsfd
    .then((data) => console.log(data))
    .catch(console.error);   //fslsfkdjsfdlj

//writing a file
fs.writeFile('./file.txt', 'Hello, test')

//append
fs.appendFile('./file.txt', 'Hello, test')

//copy
fs
.copyFile('./file.txt', './file2.txt')
.catch(console.error);

//순서대로 작성했지만 모든게 promise임으로 순서가 보장되지 않는다.
//순서가 중요한 경우라면 then안에서 해당 프로미스가 실행이 된 다음에 
//특정한 일을 해야한다.

//folder
fs.mkdir('sub-folder')
.catch(console.error)

fs.readdir('./')
.then(console.log)
.catch(console.error);
