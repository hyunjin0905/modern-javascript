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
// - 의 length property 는 arguments 인자 이다
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


// es5 에서 유사배열객체 였는데
// es6 에서는 리터러블 또는 유사배열객체 임

// 유사배열객체는 배열 아님 배열 메서드 사용 오류

// 간접호출
function summ() {
    const array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur) {
        return pre + cur;
    }, 0);
}

console.log(sum(1,2))
console.log(sum(1,2,3,4))

// caller 프로퍼티
// 함수 자신을 호출하는 함수를 가리킨다
function f1() {
    return func();
}
function bar () {
    return "caller:" + bar.caller
}

console.log(foo(bar));
console.log(bar());
// -> 브라우저환경이랑 node 환경이랑 다름


// length 프로퍼티
// 함수 객체의 매개변수의 개수
function f2() {
    console.log(f2.name);
}
function f3(x) {
    return x
}

console.log(f3.length);
function f4(x, y) {
    return x * y
}

console.log(f4.length)

// name property
// 기명
var namedFuc = function foo() {}
console.log(namedFuc.name);
// 익명
// anoymousFunc = function() {};
// ES5: name프로퍼티는 빈문자열을 값으로 갖는다
// ES6: name 프로퍼티는 함수 객체를 가리키는 변수 이름을 값으로 갖는다

// 함수 선언문
function far() {

}
console.log(far.name)                                                                    
// *** 함수이름과 함수 객체를 가리키는 식별자의 의미는 다르다


//__proto__ 접근자 프로퍼티
// [[Prototype]] 에 접근하기위해  간접 접근
const obj = { a: 1 };
console.log(obj.__proto__ === Object.prototype);

/// 객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인 Object.prototype의 프로퍼티를 상속받는다
console.log(obj.hasOwnProperty('a'));
console.log(obj.hasOwnProperty('__proto__'));


// prototype 프로퍼티
// 생성자함수로 호출할수 있는 함수 객체 consturcutor 만이 소유하느 ㄴ프로퍼티

// 함수 객체는 prototype 프로퍼티를 소유한다
(function () {}.hasOwnProperty('prototype'))

// 일반 객체는 prototype 프로퍼티를 소유 하지 않는다
// ({}).hasOwnProperty('prototype')