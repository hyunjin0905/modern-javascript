// * 제너레이터 활용
// - 이터러블 구현

// 무한 이터러블을 생성하는 함수
const infiniteFibonacci = (function () {
    let [pre, cur] = [0, 1];
    return {
        [Symbol.iterator]() { return this;},
        next(){
            [pre, cur] = [cur, pre + cur];
            return { value: cur };
        }
    };
});


// for (const num of infiniteFibonacci) {
//     if (num > 10000) break;
//     console.log(num);
// }

//무한 이터러블 제너레이터 함수

const infiniteFibonacciGen = (function* () {
    let [pre, cur] = [0, 1];
 while(true) {
     [pre, cur] = [cur, pre + cur];
     yield cur;
 }
}());

for (const num of infiniteFibonacciGen) {
    if (num > 10000) break;
    console.log(num);
}