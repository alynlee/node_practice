const fs = require('fs');


//write하는 데이터를 모두 읽은 후 쓰기를 시작한다.
//if file이 메모리 크기를 넘는 경우 사용할 수 없고 비효율적이다.
const beforeMem = process.memoryUsage().rss;
fs.readFile('./file.txt', (_, data) => {
    fs.writeFile('./file2.txt', data, () => {});
    const afterMem = process.memoryUsage().rss;
    const diff = afterMem - beforeMem;
    const consumed = diff / 1024 / 1024;
    console.log(diff);
    console.log(`Consumed Memory : ${consumed}MB`);
});

