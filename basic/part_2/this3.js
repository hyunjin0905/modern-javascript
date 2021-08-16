/**
 *
 * 주어진 this 바인딩과 인수 리스트 배열을 사용하여 함수를 호출한다
 * @param thisArg - this로 사용할 객체
 * @param argsArray - 함수에게 전달할 인수 리스트의 배열 또는 유사 배열 객체
 * @returns 호출된 함수의 반환값
 * Function.prototype.apply(thisArg[, argsArray])
 */


/**
 *
 * 주어진 this 바인딩과 , 로 구분된 인수 리스트를 사용하여 함수를 호출한다
 * @param thisArg - this로 사용할 객체
 * @param arg1, arg2, ... - 함수에게 전달할 인수 리스트
 * @returns 호출된 함수의 반환값
 * Function.prototype.call(thisArg[, acrg1[, arg2[, ...]]])
 */


function getThisBinding() {
    return this;
}

const thisArg = { a: 1 }
console.log(getThisBinding());
console.log(getThisBinding.apply(thisArg, [1, 2, 3]))
console.log(getThisBinding.call(thisArg, 1, 2, 3))
// apply 와 call 메서드의 본질적인 기능은 함수를 호출 하는것 ,
// 함수를 호출하면서 첫번쨰 인수로 전달한 특정 객체를 호출한 함수의 this 에 바인딩 한다

function converArgsToArray() {
    console.log(arguments);
    // Array.prototype.slice를 인수 없이 호출하면 배여릐 복사본을 생성한다
    const arr = Array.prototype.slice.call(arguments);
    console.log(arr);
    return arr;
}
converArgsToArray(1,2,3);

// bind  this로 사용할 객체만 전달
// 호출하지 않음
console.log(getThisBinding.bind(thisArg));
// 명시적으로 호출
console.log(getThisBinding.bind(thisArg)());


// bind 메서드는 메서드의 this와 메서드 내부의 중첩 함수 또는 콜백 함수의 this가 불일치하는 문제를 해결 하기 위해 유용하게 사용된다
const person = {
    name: 'lucy',
    foo(callback) {
        setTimeout(callback.bind(this), 100)
    }
};

person.foo(function () {
    console.log(`hi my name is ${this.name}`)
});
