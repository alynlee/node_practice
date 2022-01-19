//  node.js는 컴퓨터 위에서 동작하기때문에 파일 시스템에 접근하기가 좋음
// 그럴때 사용할 수 있는 path?
const path = require('path');
console.log(__dirname);
console.log(__filename);
//운영체제에 따라 파일의 표현식이 다름 
//hard coding으로 파일경로를 입력하는 것은 좋지 못하다.

console.log(path.sep); //경로 구분자
console.log(path.delimiter); //환경변수 구분자

console.log(path.basename(__filename)); //파일이름만 출력
console.log(path.basename(__filename, '.js')); //확장자 제거

//dirname
console.log(path.dirname(__filename, '.js'));

//extention
console.log(path.extname(__filename));

//parse
const parsed = path.parse(__filename)
console.log(parsed);
console.log(parsed.root);

//string
const str = path.format(parsed)
console.log(str);

//isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname));
console.log('isAbsolute?', path.isAbsolute('../'));

//normalize //이상한 경로를 알아서 고쳐줌
console.log(path.normalize('./folder///////////sub'));

//join
console.log(__dirname + '/' + 'image'); //하드코딩시 운영체제에 따라 달라 (윈도우에서 이상해짐)
console.log(path.join(__dirname, 'image'));