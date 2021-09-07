// * 화살표 함수
// 기존 함수 정의 방식 보다 간략
// 내부 동작도 기존의 함수보다 간략
// 콜백 함수 내부에서 this가 전역 객체를 가리키는 문제를 해결하기위한 대안


// 함수 정의
const multiply = (x, y) => x * y;
multiply(2, 3);

const add = (x, y) => x + y;
add(2,3);


// 매개 변수 선언
// * 매개변수 여러개 인 경우
const arrow = (x, y) => { };

// 한개인 경우 소괄호 () 생략 가능
const arrow2 = x => {};

// 없는 경우는 생략 불가능
const arrow3 = () => {};



// 함수 몸체 정의
// 함수 몸체가 하나의 문으로 구성된다면 함수 몸체를 감싸는 중괄호 {}를 생략할 수 있다
// concise body
const power = x => x ** 2;
power(2);

//block body
const power2 = (x) => {
    return x ** 2;
}


// const arrow = () => const x = 1; 표현식 아닌문이라면 에러발생
// - 표현식 아닌 문이라면 중괄호 생략 할수 없다
// const arrow = () => { return const x = 1; }
// const arrow = () => { const x = 1; }


// 객체 리터럴을 반환하는 경우 소괄호 () 감싸주기
const create = (id, content) => ({ id, content });
console.log(create(1, "javascript"));

// 위와 같다
const create2 = (id, content) => { return { id, content }}
console.log(create(2, "java"));


const company = (name, kind) => ({ name, kind });
console.log(company("a은행", "2금융"));
// 주의 () 감싸지 않으면 객체 리터럴의 중괄호 {} 를 함수 몸체를 감싸는 중괄호 {} 로 잘못 해석한다


// 함수 몸체가 여러개의 문으로 구성된다면 {} 생략 불가능
const sum = (a, b) => {
    const result = a + b;
    return result;
}

// 화살표 함수도 즉시 실행함수 가능
const person = (name => ({
    sayHi() {return `hi my name is ${name}`}
})("lucy"))


// 화살표 함수도 일급객체이므로
//Array.prototype.map
//  Array.prototype.filter
//Array.prototype.reduce
// high order function 에 인수로 전달 할수 있따

// es 5
[1, 2, 3].map(function (data) {
    return data * 2
})

//es6
[1, 2, 3].map(v => v * 2)


// 화살표 함수 와 일바 함수의 차이

// 1. 화살표 함수는 인스턴스를 생성할 수 없는 non-constuctor이다
const Foo =() => {};
//new Foo() // TypeError: Foo is not a constructor
// 인스턴스를 생성할수 없으므로 prototype 프로퍼티가 없고 프로토타입도 생성하지 않는다


// 2. 중복된 매개 변수 이름을 선언할수 없다
function f(a,a) {
    return a + a;
} // use strict 모드 사용하면 에러 발생함..

console.log(f(1,2))

//const f2 (a,a) => a + a;

// 3. 함수 자체의 this, arguments, super, new.target 바인딩을 갖지 않는다 참조하면 사위스코프의 를 참조한다


