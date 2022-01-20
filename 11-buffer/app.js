//조금씩의 data를 streaming하게 됨
//서버에서는 streaming을통해 받은 데이터를 buffering을 했다가 작은 단위의 segment를 사용자에게 보여줌 
//HLS player
//buffer와 stream은 time과 memory가 efficiency하다.
//서버가 파일을 다 읽기를 기다리는 것이 아니라 조금씩 읽으면서 동시에 사용자에게 조금씩 보여줄 수 있기 때문이다.

//prev
//encoding을 따로 지정하지 않으면 buffer가 읽힘

// const fs = require('fs').promises
// fs.readFile('./text.txt')
// .then((data) => console.log(data))
// .catch(console.error);

//----------------------------------------------------------------------------------------

//Fixed-size chuck of memory 
//array of integers, byte of data
//메모리에 들어있는 데이터 자체를 가르키고 있다.

const buf = Buffer.from('Hi')
console.log(buf); //unicode 
console.log(buf[0]); //ascii
console.log(buf[1]); 
console.log(buf.length);
console.log(buf.toString());  //encoding을 option으로 전달할 수 있다.

//create
const buf2 = Buffer.alloc(2); //2 공간 메모리를 찾아서 초기화
const buf3 = Buffer.allocUnsafe(3); // 초기화 안하고 쓰레기 
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());
//buf는 문자가 될수도 있고 숫자가 될 수도 있고 데이터를 row의 형태로 byte단위로 처리할 수 있게 해줌

//concat
const newBuf = Buffer.concat([buf,buf2,buf3]);
console.log(newBuf.toString());