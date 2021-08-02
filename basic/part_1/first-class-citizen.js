console.log("------------------------ first-calss citizen -------------------------------")
// 일급객체
// * 무명의 리터럴로 생성 즉 런타임에 생성이 가능
// * 변수나 자료구조(객체, 배열 등)에 저장할 수 있다
// * 함수의 매개변수에 전달할 수 있다
// * 함수의 매개변수에 전달할 수 있다
// * 함수의 반환값으로 사용할 수 있다


// 1. 함수는 무명의 리터럴로 생성할 수 있다
// 2. 함수는 변수에 저장 할수 있다.
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
const increase = function (num) {
    return ++num;
}

const decrease = function (num) {
    return --num;
}

// 2. 함수는 객체에 저장할 수 있다
const predicates = { increase, decrease };
console.log(predicates);

// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(predicate) {
    let num = 0;
    return function () {
        num = predicate(num);
        return num;
    };
}

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const increaser = makeCounter(predicates.increase);
console.log(increaser());
console.log(increaser());

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const decreaser = makeCounter(predicates.decrease);
console.log(decreaser());
console.log(decreaser());



console.log("------------------------ test -------------------------------")
// 1.함수는 무명의 리터럴로 만들수 있다
const unnamed_func = function (){
    return "1.함수는 무명의 리터럴로 만들수 있다"
};
// 2. 함수를 변수에 담을 수 있다
const sayHello = function () {
    return "2. 함수를 변수에 담을 수 있다"
}
// 3. 함수는 객체에 담을수 있다
const funcitonObject = { unnamed_func, function(){ console.log("1") } }
console.log(funcitonObject)

const sayHelloName = function (name) {
    return function () {
        return `${name}`

    }
}
const foo = sayHelloName(funcitonObject.unnamed_func)
console.log(foo)
const foo2 = sayHelloName(funcitonObject.function)
console.log(foo2)
console.log("------------------------ object's property-------------------------------")

// * 객체의 프로퍼티
function square(number) {
    return number * number;
}
console.dir(square)
console.log(Object.getOwnPropertyDescriptors(square));

// __proto__ 는 square 함수의 프로퍼티가 아니다 , 데이터 프로퍼티
// console.log(Object.getOwnPropertyDescriptor(square, '__proto__'))

// square 함수는 Object.prototype 객체로부터 __proto__ 접근자 프로퍼티를 상속받는다
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'))


// arguments 프로퍼티
function multiply(x, y) {
    console.log(arguments);
    return x * y;

}

// 함수 호출시 전다로딘 인수 들의 정보를 잠고 있느 ㄴ순회 가능한 유사 배열 객체
// 함수 내부에서 지역 변수처럼 사용된다
// es3 폐지
// 자바스크립트 는 함수의 매개변수와 인수의 개수가 일치하는지 확인하지 않는다
// 매개 변수 개수를 확정 할수 없는 가변인자 함수를 구현 할때 유용한다

function sum() {
    let res = 0;
    // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for문으로 순회 할수 있다
    for(let i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }
    return res;
}

console.log(sum());
console.log(sum(1,2))
console.log(sum(1,2,3))


// *** arguments 객체의 Symbol(Symbol.iterator )프로퍼티
// 유사배열 객체란 length 프로퍼니틀 가진 객체로 for 문으로 순회 할수 있는 객체
// 실제 배열 아님


function mutliply(x,y) {
    const iterator = arguments[Symbol.iterator]();
    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.next())

    return x * y;
}

mutliply(1,2,3);



