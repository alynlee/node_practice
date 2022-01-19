// console.log(('code1'));
// setTimeout(() => {
//     console.log('setTimeout 0');

// }, 0);

// console.log('code2');
// setImmediate(() => {
//     console.log('setImmediate');
// });

// console.log('code3');
// process.nextTick(() => {
//     console.log('process.netTick');

// });

//timeout이 얼마나 걸리는지 확인
//callstack이 비어질때까지 callback은 기다려야하니까 사실상 0초라고 하더라도 시간이 더 걸릴 수 있다.
console.time('timeout 0')
setTimeout(() => {
    console.timeEnd('timeout 0');
    console.log('setTimeout 0');
}, 0);