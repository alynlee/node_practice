function hello() {
    console.log(this);
    console.log(this === global);

}

console.log('-----function----');
hello()

class A {
    constructor(num) {
        this.num = num;
    }
    memberFunction() {
        console.log('------class-------');

        console.log(this);
        console.log(this === global);


    }
}

const a = new A(1);
a.memberFunction()

//class 내에서 this는 자기 자신을 가리키고 함수내에서는 global이다.
//브라우저에서 쓰이는 this는 global을 가리켰으나 node.js에서 this는 module에 있는 export를 가리킴
//nodejs는 global이 어디 쓰였는지에 따라 유형이 다르다.
console.log('---global---');
console.log(this === module.exports);